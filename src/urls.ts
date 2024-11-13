import { SERVER_ROUTES } from "./routes/serverRoutes";
import { getEnvironment } from "./utils/environment";

type Dictionary = Record<string, string>;

const url = (appName: string) =>
  "https://" + window.location.hostname + "/" + appName + "/bundle.js";

const AUTH_URL = {
  local: "http://localhost:5173/userinfo",
  development: SERVER_ROUTES.USER_INFO,
  production: SERVER_ROUTES.USER_INFO,
} as const satisfies Dictionary;

const SOKOS_UP_VENTEREGISTER_URL = {
  local: "http://localhost:5173/bundle.js",
  development: url("sokos-up-venteregister"),
  production: url("sokos-up-venteregister"),
} as const satisfies Dictionary;

const SOKOS_UP_ATTESTASJON_URL = {
  local: "http://localhost:5173/bundle.js",
  development: url("sokos-up-attestasjon"),
  production: url("sokos-up-attestasjon"),
} as const satisfies Dictionary;

const SOKOS_MIKROFRONTEND_TEMPLATE_URL = {
  local: "http://localhost:5173/bundle.js",
  development: url("sokos-mikrofrontend-template"),
  production: url("sokos-mikrofrontend-template"),
} as const satisfies Dictionary;

const SOKOS_UP_KRP_URL = {
  local: "http://localhost:5173/bundle.js",
  development: url("sokos-up-krp"),
  production: url("sokos-up-krp"),
} as const satisfies Dictionary;

const SOKOS_UP_KRO_URL = {
  local: "http://localhost:5173/bundle.js",
  development: url("sokos-up-kro"),
  production: url("sokos-up-kro"),
} as const satisfies Dictionary;

const SOKOS_UP_ORS_URL = {
  local: "http://localhost:5173/bundle.js",
  development: url("sokos-up-ors"),
  production: url("sokos-up-ors"),
} as const satisfies Dictionary;

const SOKOS_UP_SKATTEKORT_URL = {
  local: "http://localhost:5173/bundle.js",
  development: url("sokos-up-skattekort"),
  production: url("sokos-up-skattekort"),
} as const satisfies Dictionary;

const SOKOS_UP_SPK_MOTTAK_URL = {
  local: "http://localhost:5173/bundle.js",
  development: url("sokos-up-spk-mottak"),
  production: url("sokos-up-spk-mottak"),
} as const satisfies Dictionary;

const SOKOS_UP_OPPDRAGSINFO_URL = {
  local: "http://localhost:5173/bundle.js",
  development: url("sokos-up-oppdragsinfo"),
  production: url("sokos-up-oppdragsinfo"),
} as const satisfies Dictionary;

const SOKOS_UP_RESENDING_BANK_URL = {
  local: "http://localhost:5173/bundle.js",
  development: url("sokos-up-resending-bank"),
  production: url("sokos-up-resending-bank"),
} as const satisfies Dictionary;

const SOKOS_UP_UTBETALING_URL = {
  local: "http://localhost:5173/bundle.js",
  development: url("sokos-up-utbetaling"),
  production: url("sokos-up-utbetaling"),
} as const satisfies Dictionary;

const SOKOS_UP_BUNTKONTROLL_URL = {
  local: "http://localhost:5173/bundle.js",
  development: url("sokos-up-buntkontroll"),
  production: url("sokos-up-buntkontroll"),
} as const satisfies Dictionary;

export const authURL = AUTH_URL[getEnvironment()];
export const sokosUpVenteregisterURL =
  SOKOS_UP_VENTEREGISTER_URL[getEnvironment()];
export const sokosUpAttestasjonURL = SOKOS_UP_ATTESTASJON_URL[getEnvironment()];
export const sokosMikrofrontendTemplateURL =
  SOKOS_MIKROFRONTEND_TEMPLATE_URL[getEnvironment()];
export const sokosUpKrpURL = SOKOS_UP_KRP_URL[getEnvironment()];
export const sokosUpKroURL = SOKOS_UP_KRO_URL[getEnvironment()];
export const sokosUpOrsURL = SOKOS_UP_ORS_URL[getEnvironment()];
export const sokosUpSkattekortURL = SOKOS_UP_SKATTEKORT_URL[getEnvironment()];
export const sokosUpSpkMottakURL = SOKOS_UP_SPK_MOTTAK_URL[getEnvironment()];
export const sokosUpOppdragsinfoURL =
  SOKOS_UP_OPPDRAGSINFO_URL[getEnvironment()];
export const sokosUpResendingBankURL =
  SOKOS_UP_RESENDING_BANK_URL[getEnvironment()];
export const sokosUpUtbetalingURL = SOKOS_UP_UTBETALING_URL[getEnvironment()];
export const sokosUpBuntkontrollURL =
  SOKOS_UP_BUNTKONTROLL_URL[getEnvironment()];
