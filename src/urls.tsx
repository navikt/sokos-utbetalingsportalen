import { getEnvironment } from "./api/environment";

const SOKOS_OP_PROXY_URL: Record<string, string> = {
  local: "http://localhost:5173/sokos-op-proxy",
  development: "https://okonomiportalen.dev.intern.nav.no/sokos-op-proxy",
  production: "https://okonomiportalen.intern.nav.no/sokos-op-proxy",
};

const BASE_URL: Record<string, string> = {
  local: "http://localhost:5173",
  development: "https://okonomiportalen.dev.intern.nav.no",
  production: "https://okonomiportalen.nav.no",
};

const MIKROFRONTEND_URL: Record<string, string> = {
  local: "http://localhost:5173/mikrofrontend/bundle.js",
  development: "https://okonomiportalen.dev.intern.nav.no/mikrofrontend/bundle.js",
  production: "https://okonomiportalen.intern.nav.no/mikrofrontend/bundle.js",
};

export const sokosLoginApiUrl = `${SOKOS_OP_PROXY_URL[getEnvironment()]}/login/status`;
export const baseUrl = BASE_URL[getEnvironment()];
export const mikrofrontendUrl = MIKROFRONTEND_URL[getEnvironment()];
