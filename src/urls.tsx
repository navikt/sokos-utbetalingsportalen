import { getEnvironment } from "./api/environment";

const BASE_URL: Record<string, string> = {
  local: "http://localhost:5173",
  development: "https://okonomiportalen.intern.dev.nav.no",
  production: "https://okonomiportalen.intern.nav.no",
};

const SOKOS_MIKROFRONTEND_TEMPLATE_URL: Record<string, string> = {
  local: "http://localhost:5173/sokos-mikrofrontend-template/bundle.js",
  development: "https://okonomiportalen.intern.dev.nav.no/sokos-mikrofrontend-template/bundle.js",
  production: "https://okonomiportalen.intern.nav.no/sokos-mikrofrontend-template/bundle.js",
};

const UTBETALING_FRONTEND_POC_URL: Record<string, string> = {
  local: "http://localhost:5173/utbetaling-frontend-poc/bundle.js",
  development: "https://okonomiportalen.intern.dev.nav.no/utbetalinger-frontend-poc/bundle.js",
  production: "https://okonomiportalen.intern.nav.no/utbetaling-frontend-poc/bundle.js",
};

export const baseUrl = BASE_URL[getEnvironment()];
export const sokosMikrofrontendTemplateUrl = SOKOS_MIKROFRONTEND_TEMPLATE_URL[getEnvironment()];
export const utbetalingFrontendPocUrl = UTBETALING_FRONTEND_POC_URL[getEnvironment()];
