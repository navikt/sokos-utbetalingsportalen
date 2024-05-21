import { SERVER_PATH } from "./models/serverPath";
import { getEnvironment } from "./utils/environment";

type Dictionary = Record<string, string>;

const AUTH_URL = {
  local: "http://localhost:5173/mock/auth",
  development: SERVER_PATH.USER_INFO,
  production: SERVER_PATH.USER_INFO,
} as const satisfies Dictionary;

const SOKOS_MIKROFRONTEND_TEMPLATE_URL = {
  local: "http://localhost:5173/microfrontend/bundle.js",
  development:
    "https://utbetalingsportalen.ansatt.dev.nav.no/sokos-mikrofrontend-template/bundle.js",
  production:
    "https://utbetalingsportalen.intern.nav.no/sokos-mikrofrontend-template/bundle.js",
} as const satisfies Dictionary;

const SOKOS_UP_KRP_URL = {
  local: "http://localhost:5173/microfrontend/bundle.js",
  development:
    "https://utbetalingsportalen.intern.dev.nav.no/sokos-up-krp/bundle.js",
  production:
    "https://utbetalingsportalen.intern.nav.no/sokos-up-krp/bundle.js",
} as const satisfies Dictionary;

const SOKOS_UP_ORS_URL = {
  local: "http://localhost:5173/microfrontend/bundle.js",
  development:
    "https://utbetalingsportalen.intern.dev.nav.no/sokos-up-ors/bundle.js",
  production:
    "https://utbetalingsportalen.intern.nav.no/sokos-up-ors/bundle.js",
} as const satisfies Dictionary;

const SOKOS_UP_SKATTEKORT_URL = {
  local: "http://localhost:5173/microfrontend/bundle.js",
  development:
    "https://utbetalingsportalen.intern.dev.nav.no/sokos-up-skattekort/bundle.js",
  production:
    "https://utbetalingsportalen.intern.nav.no/sokos-up-skattekort/bundle.js",
} as const satisfies Dictionary;

const SOKOS_UP_OPPDRAGSINFO_URL = {
  local: "http://localhost:5173/microfrontend/bundle.js",
  development:
    "https://utbetalingsportalen.intern.dev.nav.no/sokos-up-oppdragsinfo/bundle.js",
  production:
    "https://utbetalingsportalen.intern.nav.no/sokos-up-oppdragsinfo/bundle.js",
} as const satisfies Dictionary;

export const authURL = AUTH_URL[getEnvironment()];
export const sokosMikrofrontendTemplateURL =
  SOKOS_MIKROFRONTEND_TEMPLATE_URL[getEnvironment()];
export const sokosUpKrpURL = SOKOS_UP_KRP_URL[getEnvironment()];
export const sokosUpOrsURL = SOKOS_UP_ORS_URL[getEnvironment()];
export const sokosUpSkattekortURL = SOKOS_UP_SKATTEKORT_URL[getEnvironment()];
export const sokosUpOppdragsinfoURL =
  SOKOS_UP_OPPDRAGSINFO_URL[getEnvironment()];
