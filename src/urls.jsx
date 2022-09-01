import { getEnvironment } from "./api/environment";

const OKONOMIPORTALEN_URL = {
  local: "http://localhost:3000/okonomiportalen",
  development: "https://okonomiportalen.dev.intern.nav.no/okonomiportalen",
  production: "https://okonomiportalen.intern.nav.no/okonomiportalen",
};

const SOKOS_OKONOMIPORTALEN_PROXY_URL = {
  local: "http://localhost:3000/sokos-okonomiportalen-proxy",
  development: "https://okonomiportalen.dev.intern.nav.no/sokos-okonomiportalen-proxy",
  production: "https://okonomiportalen.intern.nav.no/sokos-okonomiportalen-proxy",
};

const BASE_URL = {
  local: "http://localhost:3000",
  development: "https://okonomiportalen.dev.intern.nav.no",
  production: "https://okonomiportalen.nav.no",
};

const ATTESTASJON_URL = {
  local: "http://localhost:3000/sokos-attestasjon-frontend/bundle.js",
  development: "https://okonomiportalen.dev.intern.nav.no/sokos-attestasjon-frontend/bundle.js",
  production: "https://okonomiportalen.intern.nav.no/sokos-attestasjon-frontend/bundle.js",
};

export const okonomiportalenUrl = OKONOMIPORTALEN_URL[getEnvironment()];
export const attestasjonUrl = ATTESTASJON_URL[getEnvironment()];
export const sokosOkonomiportalenProxy = SOKOS_OKONOMIPORTALEN_PROXY_URL[getEnvironment()];
export const authenticationUrl = `${SOKOS_OKONOMIPORTALEN_PROXY_URL[getEnvironment()]}/login/status`;
export const baseUrl = BASE_URL[getEnvironment()];
