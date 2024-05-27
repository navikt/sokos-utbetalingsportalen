import { SERVER_PATH } from "./models/serverPath";
import { getEnvironment } from "./utils/environment";

type Dictionary = Record<string, string>;

const localUrl = "http://localhost:5173/microfrontend/bundle.js";

const url = (appName: string) => {
  if (getEnvironment() === "local") {
    return localUrl;
  }
  return "https://" + window.location.hostname + "/" + appName + "/bundle.js";
};

const AUTH_URL = {
  local: "http://localhost:5173/mock/auth",
  development: SERVER_PATH.USER_INFO,
  production: SERVER_PATH.USER_INFO,
} as const satisfies Dictionary;

/* const SOKOS_MIKROFRONTEND_TEMPLATE_URL = {
  url: url("sokos-mikrofrontend-template"),
} as const satisfies Dictionary; */

const SOKOS_UP_KRP_URL = {
  local: "http://localhost:5173/microfrontend/bundle.js",
  development: url("sokos-up-krp"),
  production: url("sokos-up-krp"),
} as const satisfies Dictionary;

const SOKOS_UP_ORS_URL = {
  local: "http://localhost:5173/microfrontend/bundle.js",
  development: url("sokos-up-ors"),
  production: url("sokos-up-ors"),
} as const satisfies Dictionary;

const SOKOS_UP_SKATTEKORT_URL = {
  local: "http://localhost:5173/microfrontend/bundle.js",
  development: url("sokos-up-skattekort"),
  production: url("sokos-up-skattekort"),
} as const satisfies Dictionary;

const SOKOS_UP_OPPDRAGSINFO_URL = {
  local: "http://localhost:5173/microfrontend/bundle.js",
  development: url("sokos-up-oppdragsinfo"),
  production: url("sokos-up-oppdragsinfo"),
} as const satisfies Dictionary;

export const authURL = AUTH_URL[getEnvironment()];
export const sokosMikrofrontendTemplateURL = url(
  "sokos-mikrofrontend-template",
);
export const sokosUpKrpURL = SOKOS_UP_KRP_URL[getEnvironment()];
export const sokosUpOrsURL = SOKOS_UP_ORS_URL[getEnvironment()];
export const sokosUpSkattekortURL = SOKOS_UP_SKATTEKORT_URL[getEnvironment()];
export const sokosUpOppdragsinfoURL =
  SOKOS_UP_OPPDRAGSINFO_URL[getEnvironment()];
