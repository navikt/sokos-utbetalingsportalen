import { getEnvironment } from "./api/environment";
import { Path } from "./models/path";

const AUTH_URL: Record<string, string> = {
  local: "http://localhost:5173/mock/auth",
  development: Path.BRUKER_IDENT,
  production: Path.BRUKER_IDENT,
};

const SOKOS_MIKROFRONTEND_TEMPLATE_URL: Record<string, string> = {
  local: "http://localhost:5173/sokos-mikrofrontend-template/bundle.js",
  development: "https://okonomiportalen.intern.dev.nav.no/sokos-mikrofrontend-template/bundle.js",
  production: "https://okonomiportalen.intern.nav.no/sokos-mikrofrontend-template/bundle.js",
};

const SØK_POSTERINGER_URL: Record<string, string> = {
  local: "http://localhost:5173/utbetaling-frontend-poc/bundle.js",
  development: "https://okonomiportalen.intern.dev.nav.no/utbetalinger-frontend-poc/bundle.js",
  production: "https://okonomiportalen.intern.nav.no/utbetaling-frontend-poc/bundle.js",
};

export const authUrl = AUTH_URL[getEnvironment()];
export const sokosMikrofrontendTemplateUrl = SOKOS_MIKROFRONTEND_TEMPLATE_URL[getEnvironment()];
export const utbetalingFrontendPocUrl = SØK_POSTERINGER_URL[getEnvironment()];
