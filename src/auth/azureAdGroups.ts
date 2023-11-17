import { getEnvironment } from "../utils/environment";

type Dictionary = Record<string, string>;

const AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ = {
  local: "1b717a23-d376-471c-9fc6-356299fadc2b",
  development: "1b717a23-d376-471c-9fc6-356299fadc2b",
  production: "",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ = {
  local: "b01fb216-fcb3-4ede-b7da-71fffe859763",
  development: "e0023d91-26bc-4d5d-95ba-3148b6123afc",
  production: "25723642-e1da-4d15-87ce-8c4d2b87e33a",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ = {
  local: "a13b4176-e328-4e1c-b181-ff676a7146b1",
  development: "1d1af049-4539-4988-a1db-b5bf3066322c",
  production: "6c93762e-ea37-4043-919f-3a758a136943",
} as const satisfies Dictionary;

export const AzureAdGroupName = {
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: "AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ",
  AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ: "AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ",
  AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ: "AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ",
} as const satisfies Dictionary;

export type AzureAdGroupNames = keyof typeof AzureAdGroupName;

export const AzureAdGroupNameId = {
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ: AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ: AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ[getEnvironment()],
} as const satisfies Dictionary;
