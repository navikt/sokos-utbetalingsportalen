import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
	LOCAL_DEV_GROUPS,
	LOCAL_DEV_NAME,
	LOCAL_DEV_NAVIDENT,
} from "./localDevGroups";

const mockDir = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(mockDir, "oauth-config.json");

/**
 * Bygger config-objektet mock-oauth2-server leser via JSON_CONFIG_PATH.
 * Grupper/navn/NAVident kommer fra `localDevGroups.ts` - den delte kilden
 * med `mock/auth/localDevUser.ts` - slik at `pnpm dev` (syntetisk bypass) og
 * `pnpm dev:mock` (ekte OIDC-flyt) alltid gir identisk tilgang.
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
							name: LOCAL_DEV_NAME,
							NAVident: LOCAL_DEV_NAVIDENT,
							groups: LOCAL_DEV_GROUPS,
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
	console.log(`Generert ${outputPath} (${LOCAL_DEV_GROUPS.length} AD-grupper)`);
}

main();
