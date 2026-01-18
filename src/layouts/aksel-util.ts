import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJson = JSON.parse(
	readFileSync(join(__dirname, "../../package.json"), "utf-8"),
);

// Vi henter versjonen av @navikt/ds-react fra package.json slik at vi bruker samme versjon i CDN-lenken i Layout.astro
// Slik unngår vi manual oppdatering av versjonen i CDN-lenken hver gang dependabot oppdaterer pakken.
export const akselVersion = packageJson.dependencies["@navikt/ds-react"];
