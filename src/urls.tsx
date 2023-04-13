import { getEnvironment } from "./api/environment";

const SOKOS_OP_PROXY_URL: Record<string, string> = {
  local: "http://localhost:5173/sokos-op-proxy",
  development: "https://okonomiportalen.intern.dev.nav.no/sokos-op-proxy",
  // production: "https://okonomiportalen.intern.nav.no/sokos-op-proxy",
};

const BASE_URL: Record<string, string> = {
  local: "http://localhost:5173",
  development: "https://www.intern.dev.nav.no",
  // production: "https://okonomiportalen.nav.no",
};

const MIKROFRONTEND_URL: Record<string, string> = {
  local: "http://localhost:5173/mikrofrontend/bundle.js",
  development: "https://www.intern.dev.nav.no/mikrofrontend",
  // production: "https://okonomiportalen.intern.nav.no/mikrofrontend/bundle.js",
};

const ATTESTASJON_URL: Record<string, string> = {
  local: "http://localhost:5173/attestasjon/bundle.js",
  development: "https://okonomiportalen.intern.dev.nav.no/attestasjon/bundle.js",
  // production: "https://okonomiportalen.intern.nav.no/attestasjon/bundle.js",
};

const POSTERING_URL: Record<string, string> = {
  local: "http://localhost:5173/postering/bundle.js",
  development: "https://okonomiportalen.intern.dev.nav.no/postering/bundle.js",
  // production: "https://okonomiportalen.intern.nav.no/postering/bundle.js",
};

const UTBETALING_FRONTEND_POC_URL: Record<string, string> = {
  local: "http://localhost:5173/utbetaling-frontend-poc/bundle.js",
  development: "https://okonomiportalen.intern.dev.nav.no/utbetalinger-frontend-poc/bundle.js",
  // production: "https://okonomiportalen.intern.nav.no/utbetaling-frontend-poc/bundle.js",
};

export const sokosLoginApiUrl = `${SOKOS_OP_PROXY_URL[getEnvironment()]}/login/status`;
export const baseUrl = BASE_URL[getEnvironment()];
export const mikrofrontendUrl = MIKROFRONTEND_URL[getEnvironment()];
export const attestasjonUrl = ATTESTASJON_URL[getEnvironment()];
export const posteringUrl = POSTERING_URL[getEnvironment()];
export const utbetalingFrontendPocUrl = UTBETALING_FRONTEND_POC_URL[getEnvironment()];
