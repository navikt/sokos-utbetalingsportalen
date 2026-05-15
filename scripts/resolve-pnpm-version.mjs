#!/usr/bin/env node
// Resolves the latest pnpm version that satisfies the repo's minimumReleaseAge
// policy and prints the matching packageManager string with SHA-512 integrity
// hash. The script independently downloads the tarball and verifies the hash
// before printing, so what you paste into package.json is provably bound to
// real bytes — not just whatever the registry manifest claimed.
//
// Usage:
//   node scripts/resolve-pnpm-version.mjs                       # major 11, min age 7d
//   node scripts/resolve-pnpm-version.mjs --major 11 --min-age-days 7

import { Buffer } from "node:buffer";
import {
	createHash,
	timingSafeEqual as cryptoTimingSafeEqual,
} from "node:crypto";
import {
	argv,
	env,
	version as nodeVersion,
	stderr,
	stdout,
} from "node:process";
import { parseArgs } from "node:util";

const REGISTRY_URL = "https://registry.npmjs.org/pnpm";
// Full manifest required: the slim "install-v1+json" view omits the top-level
// 'time' field that we need for the minimumReleaseAge cutoff.
const REGISTRY_ACCEPT = "application/json";
const NETWORK_TIMEOUT_MS = 15_000;
const ALLOWED_ALGO = "sha512";
const SEMVER_RE = /^\d+\.\d+\.\d+$/;
const SRI_RE = /^sha(?:256|384|512)-[A-Za-z0-9+/]+={0,2}$/;
const TARBALL_HOST = "registry.npmjs.org";
const MS_PER_DAY = 86_400_000;

const useColor = stdout.isTTY && stderr.isTTY && !env.NO_COLOR;
const c = {
	reset: useColor ? "\x1b[0m" : "",
	bold: useColor ? "\x1b[1m" : "",
	dim: useColor ? "\x1b[2m" : "",
	red: useColor ? "\x1b[31m" : "",
	green: useColor ? "\x1b[32m" : "",
	yellow: useColor ? "\x1b[33m" : "",
	cyan: useColor ? "\x1b[36m" : "",
};

const nodeMajor = Number(nodeVersion.slice(1).split(".")[0]);
if (!Number.isFinite(nodeMajor) || nodeMajor < 20) {
	fatal(`This script requires Node.js >= 20 (got ${nodeVersion}).`);
}

const { values: args } = parseArgs({
	args: argv.slice(2),
	options: {
		major: { type: "string", default: "11" },
		"min-age-days": { type: "string", default: "7" },
	},
	strict: true,
});
const MAJOR = requirePositiveInt(args.major, "--major");
const MIN_AGE_DAYS = requirePositiveInt(args["min-age-days"], "--min-age-days");
const CUTOFF = Date.now() - MIN_AGE_DAYS * MS_PER_DAY;

info(`${c.dim}Fetching pnpm metadata from npm registry…${c.reset}`);
const meta = await fetchJson(REGISTRY_URL, REGISTRY_ACCEPT);
assertManifestShape(meta);

// Parse each timestamp once, then filter+sort.
const eligible = Object.entries(meta.time)
	.map(([v, t]) => [v, Date.parse(t), t])
	.filter(
		([v, ts]) =>
			SEMVER_RE.test(v) &&
			Number.isFinite(ts) &&
			ts <= CUTOFF &&
			Number(v.split(".")[0]) === MAJOR,
	)
	.sort(([, a], [, b]) => b - a);

if (eligible.length === 0) {
	fatal(`No pnpm@${MAJOR}.x release is at least ${MIN_AGE_DAYS} days old.`);
}

const [version, releasedAtMs, releasedAt] = eligible[0];
const versionMeta = meta.versions?.[version];
if (!versionMeta || typeof versionMeta !== "object") {
	fatal(`Manifest for ${version} is missing or malformed.`);
}

const dist = versionMeta.dist;
if (!dist || typeof dist !== "object") {
	fatal(`Manifest for ${version} is missing 'dist'.`);
}
const { integrity: sri, tarball } = dist;

if (typeof sri !== "string" || !SRI_RE.test(sri)) {
	fatal(`Manifest integrity field is not a valid SRI string: ${sri}`);
}

const [algo, b64] = sri.split("-");
if (algo !== ALLOWED_ALGO) {
	fatal(`Refusing to use non-${ALLOWED_ALGO} integrity (got '${algo}').`);
}

if (typeof tarball !== "string") {
	fatal("Tarball URL missing from manifest.");
}

const tarballUrl = new URL(tarball);
if (tarballUrl.protocol !== "https:" || tarballUrl.host !== TARBALL_HOST) {
	fatal(`Refusing tarball from unexpected origin: ${tarballUrl.origin}`);
}

info(`${c.dim}Downloading tarball and verifying SHA-512…${c.reset}`);
const expected = Buffer.from(b64, "base64");
const actual = await downloadAndHash(tarballUrl.toString());
if (
	expected.length !== actual.length ||
	!cryptoTimingSafeEqual(expected, actual)
) {
	fatal("Tarball SHA-512 does NOT match advertised integrity. Aborting.");
}

const hex = expected.toString("hex");
const packageManager = `pnpm@${version}+${algo}.${hex}`;
const ageDays = ((Date.now() - releasedAtMs) / MS_PER_DAY).toFixed(1);
const bar = `${c.bold}${c.yellow}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${c.reset}\n`;

// Single batched stderr write — fewer syscalls, source easier to read.
stderr.write(
	`\n${c.bold}${c.cyan}Resolved pnpm version${c.reset}\n` +
		`  ${c.bold}Version${c.reset}            ${c.green}${version}${c.reset}\n` +
		`  ${c.bold}Released${c.reset}           ${releasedAt} ${c.dim}(${ageDays} days ago)${c.reset}\n` +
		`  ${c.bold}Tarball check${c.reset}      ${c.green}OK${c.reset} ${c.dim}(independently re-hashed)${c.reset}\n` +
		`  ${c.bold}Integrity (SRI)${c.reset}    ${sri}\n\n` +
		`${c.bold}${c.cyan}Paste these into package.json:${c.reset}\n\n`,
);

// stdout = the only thing meant to be piped/copied. NO COLOR codes here.
stdout.write(
	`"engines": { "pnpm": ">=${version}" },\n"packageManager": "${packageManager}"\n`,
);

stderr.write(
	`\n${c.dim}Keep the version in "engines.pnpm" aligned with "packageManager" so${c.reset}\n` +
		`${c.dim}'engineStrict' rejects mismatched local pnpm installs.${c.reset}\n\n` +
		bar +
		`${c.bold}${c.yellow}!  VERIFY BEFORE PUSHING TO GITHUB${c.reset}\n` +
		bar +
		`  1. Confirm version on the official release page:\n` +
		`     ${c.cyan}https://github.com/pnpm/pnpm/releases/tag/v${version}${c.reset}\n` +
		`  2. Compare the integrity hash above with npm's published value:\n` +
		`     ${c.cyan}https://registry.npmjs.org/pnpm/${version}${c.reset}\n` +
		`  3. Make sure the version exists on pnpm's GitHub releases (not yanked).\n` +
		`  4. Update ${c.bold}engines.pnpm${c.reset} in package.json to ${c.green}">=${version}"${c.reset}.\n` +
		`  5. Run ${c.bold}pnpm install${c.reset} locally and verify it succeeds before committing.\n` +
		`  6. Open a PR — let CI run before merging.\n` +
		bar,
);

// ---------- helpers ----------

function info(msg) {
	stderr.write(`${msg}\n`);
}

function fatal(msg) {
	stderr.write(`${c.bold}${c.red}error:${c.reset} ${msg}\n`);
	process.exit(1);
}

function requirePositiveInt(raw, label) {
	const n = Number(raw);
	if (!Number.isInteger(n) || n <= 0) {
		fatal(`${label} must be a positive integer (got '${raw}').`);
	}
	return n;
}

async function fetchJson(url, accept) {
	const ctrl = new AbortController();
	const timer = setTimeout(() => ctrl.abort(), NETWORK_TIMEOUT_MS);
	try {
		const res = await fetch(url, {
			signal: ctrl.signal,
			redirect: "error",
			headers: { accept },
		});
		if (!res.ok) throw new Error(`Registry returned HTTP ${res.status}`);
		const ct = res.headers.get("content-type") ?? "";
		if (!ct.includes("json")) {
			throw new Error(`Unexpected content-type: ${ct}`);
		}
		return await res.json();
	} finally {
		clearTimeout(timer);
	}
}

async function downloadAndHash(url) {
	const ctrl = new AbortController();
	const timer = setTimeout(() => ctrl.abort(), NETWORK_TIMEOUT_MS);
	try {
		const res = await fetch(url, { signal: ctrl.signal, redirect: "error" });
		if (!res.ok) throw new Error(`Tarball returned HTTP ${res.status}`);
		const hash = createHash("sha512");
		for await (const chunk of res.body) hash.update(chunk);
		return hash.digest();
	} finally {
		clearTimeout(timer);
	}
}

function assertManifestShape(m) {
	if (!m || typeof m !== "object") fatal("Manifest is not an object.");
	if (!m.time || typeof m.time !== "object")
		fatal("Manifest 'time' is not an object.");
	if (!m.versions || typeof m.versions !== "object")
		fatal("Manifest 'versions' is not an object.");
}
