import { getEnvironment } from "../utils/server/urls.ts";

const REDIRECT_URI = {
  local: "http://localhost:4321/",
  development: "https://utbetalingsportalen.ansatt.dev.nav.no/",
  production: "https://utbetalingsportalen.ansatt.nav.no/",
};

export const redirectUri = REDIRECT_URI[getEnvironment()];
export const loginUrl = `/oauth2/login?redirect=${redirectUri}`;
