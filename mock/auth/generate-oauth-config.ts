import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MOCK_USER } from "./devUser";

const mockDir = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(mockDir, "mock-oauth-config.json");

/**
 * Bygger config-objektet mock-oauth2-server leser via JSON_CONFIG_PATH.
 * Gjenbruker `MOCK_USER` fra `devUser.ts` (samme identitet som
 * `pnpm dev`s syntetiske bypass), slik at `pnpm dev` og `pnpm dev:mock`
 * alltid gir identisk tilgang.
 */
export function buildOauthConfig() {
	return {
		interactiveLogin: false,
		tokenCallbacks: [
			{
				issuerId: "default",
				requestMappings: [
					{
						requestParam: "grant_type",
						match: "*",
						claims: {
							sub: "ola.mohammed@nav.no",
							aud: ["local-client"],
							name: MOCK_USER.name,
							NAVident: MOCK_USER.NAVident,
							groups: MOCK_USER.groups,
						},
					},
				],
			},
		],
	};
}

function main() {
	const config = buildOauthConfig();
	writeFileSync(outputPath, `${JSON.stringify(config, null, "\t")}\n`);
	console.log(`Generert ${outputPath} (${MOCK_USER.groups.length} AD-grupper)`);
}

main();
