import { getEnvironment } from "./utils/environment";
import { SERVER_PATH } from "./models/serverPath";

type Dictionary = Record<string, string>;

const AUTH_URL = {
  local: "http://localhost:5173/mock/auth",
  development: SERVER_PATH.USER_INFO,
  production: SERVER_PATH.USER_INFO,
} as const satisfies Dictionary;

const SOKOS_MIKROFRONTEND_TEMPLATE_URL = {
  local: "http://localhost:5173/microfrontend/bundle.js",
  development: "https://okonomiportalen.intern.dev.nav.no/sokos-mikrofrontend-template/bundle.js",
  production: "https://okonomiportalen.intern.nav.no/sokos-mikrofrontend-template/bundle.js",
} as const satisfies Dictionary;

const SØK_POSTERINGER_URL = {
  local: "http://localhost:5173/microfrontend/bundle.js",
  development: "https://okonomiportalen.intern.dev.nav.no/sokos-op-postering-sok/bundle.js",
  production: "https://okonomiportalen.intern.nav.no/sokos-op-postering-sok/bundle.js",
} as const satisfies Dictionary;

const SKATTEKORT_URL = {
  local: "http://localhost:5173/microfrontend/bundle.js",
  development: "https://okonomiportalen.intern.dev.nav.no/sokos-op-skattekort/bundle.js",
  production: "https://okonomiportalen.intern.nav.no/sokos-op-skattekort/bundle.js",
} as const satisfies Dictionary;

export const authUrl = AUTH_URL[getEnvironment()];
export const sokosMikrofrontendTemplateUrl = SOKOS_MIKROFRONTEND_TEMPLATE_URL[getEnvironment()];
export const sokPosteringerUrl = SØK_POSTERINGER_URL[getEnvironment()];
export const skattekortUrl = SKATTEKORT_URL[getEnvironment()];
