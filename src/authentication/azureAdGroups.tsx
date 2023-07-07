import { getEnvironment } from "../utils/environment";

const AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ = {
  local: "1b717a23-d376-471c-9fc6-356299fadc2b",
  development: "1b717a23-d376-471c-9fc6-356299fadc2b",
  production: "",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ = {
  local: "b01fb216-fcb3-4ede-b7da-71fffe859763",
  development: "b01fb216-fcb3-4ede-b7da-71fffe859763",
  production: "",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ = {
  local: "a13b4176-e328-4e1c-b181-ff676a7146b1",
  development: "a13b4176-e328-4e1c-b181-ff676a7146b1",
  production: "",
} as const satisfies Dictionary;

type Dictionary = Record<string, string>;

export const AzureAdGroupName = {
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: "AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ",
  AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ: "AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ",
  AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ: "AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ",
} as const satisfies Dictionary;

// Kan også hente ut navnet og bruker det som et parameter i en funksjon
export type AzureAdGroupNames = keyof typeof AzureAdGroupName;

export const AzureAdGroupNameId = {
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ: AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ: AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ[getEnvironment()],
} as const satisfies Dictionary;
