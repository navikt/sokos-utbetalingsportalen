import { getEnvironment } from "../utils/environment";

type Dictionary = Record<string, string>;

const AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ = {
  local: "1b717a23-d376-471c-9fc6-356299fadc2b",
  development: "1b717a23-d376-471c-9fc6-356299fadc2b",
  production: "",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ = {
  local: "b01fb216-fcb3-4ede-b7da-71fffe859763",
  development: "b01fb216-fcb3-4ede-b7da-71fffe859763",
  production: "25723642-e1da-4d15-87ce-8c4d2b87e33a",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ_TMP = {
  local: "ikke_brukt",
  development: "ikke_brukt",
  production: "6ea7ac33-cb64-4d2d-85ea-697357c18fd9",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ = {
  local: "a13b4176-e328-4e1c-b181-ff676a7146b1",
  development: "a13b4176-e328-4e1c-b181-ff676a7146b1",
  production: "ed831b6d-4994-4ea0-937c-2b903ffba5c1",
} as const satisfies Dictionary;

export const AzureAdGroupName = {
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: "AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ",
  AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ: "AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ",
  AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ_TMP: "AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ_TMP",
  AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ: "AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ",
} as const satisfies Dictionary;

export type AzureAdGroupNames = keyof typeof AzureAdGroupName;

export const AzureAdGroupNameId = {
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ: AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ_TMP: AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ_TMP[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ: AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ[getEnvironment()],
} as const satisfies Dictionary;
