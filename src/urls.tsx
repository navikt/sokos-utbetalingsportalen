import { ROUTE_PATH } from "./models/RoutePath";
import { getEnvironment } from "./utils/environment";

type Dictionary = Record<string, string>;

const AUTH_URL = {
  local: "http://localhost:5173/mock/auth",
  development: ROUTE_PATH.BRUKER_IDENT,
  production: ROUTE_PATH.BRUKER_IDENT,
} as const satisfies Dictionary;

const SOKOS_MIKROFRONTEND_TEMPLATE_URL = {
  local: "http://localhost:5173/sokos-mikrofrontend-template/bundle.js",
  development: "https://okonomiportalen.intern.dev.nav.no/sokos-mikrofrontend-template/bundle.js",
  production: "https://okonomiportalen.intern.nav.no/sokos-mikrofrontend-template/bundle.js",
} as const satisfies Dictionary;

const SØK_POSTERINGER_URL = {
  local: "http://localhost:5173/utbetaling-frontend-poc/bundle.js",
  development: "https://okonomiportalen.intern.dev.nav.no/utbetalinger-frontend-poc/bundle.js",
  production: "https://okonomiportalen.intern.nav.no/utbetaling-frontend-poc/bundle.js",
} as const satisfies Dictionary;

const SKATTEKORT_URL = {
  local: "http://localhost:5173/sokos-op-skattekort/bundle.js",
  development: "https://okonomiportalen.intern.dev.nav.no/sokos-op-skattekort/bundle.js",
  production: "https://okonomiportalen.intern.nav.no/sokos-op-skattekort/bundle.js",
} as const satisfies Dictionary;

export const authUrl = AUTH_URL[getEnvironment()];
export const sokosMikrofrontendTemplateUrl = SOKOS_MIKROFRONTEND_TEMPLATE_URL[getEnvironment()];
export const utbetalingFrontendPocUrl = SØK_POSTERINGER_URL[getEnvironment()];
export const skattekortUrl = SKATTEKORT_URL[getEnvironment()];
