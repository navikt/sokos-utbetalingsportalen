import { getEnvironment } from "../utils/environment";

type Dictionary = Record<string, string>;

const AD_GRUPPE_SOKOS_MF_ATTESTASJON_READ = {
  local: "0de8d01f-8ad0-4391-841c-55392956bc17",
  development: "0de8d01f-8ad0-4391-841c-55392956bc17",
  production: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ = {
  local: "1b717a23-d376-471c-9fc6-356299fadc2b",
  development: "1b717a23-d376-471c-9fc6-356299fadc2b",
  production: "",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_KRP_READ = {
  local: "98146b9a-1891-44e3-9b61-92130c2fcd8b",
  development: "98146b9a-1891-44e3-9b61-92130c2fcd8b",
  production: "bb9c7baf-768b-4e84-816c-f10d0a6c7d25",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_KRO_READ = {
  local: "bdcedce3-dab5-4b68-b1d3-8625cd0d3b55",
  development: "bdcedce3-dab5-4b68-b1d3-8625cd0d3b55",
  production: "TODO",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_ORS_READ = {
  local: "b01fb216-fcb3-4ede-b7da-71fffe859763",
  development: "b01fb216-fcb3-4ede-b7da-71fffe859763",
  production: "25723642-e1da-4d15-87ce-8c4d2b87e33a",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_RESENDING_BANK_READ = {
  local: "391bec9e-e71e-42cb-a030-56c394dd13fd",
  development: "391bec9e-e71e-42cb-a030-56c394dd13fd",
  production: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ = {
  local: "a13b4176-e328-4e1c-b181-ff676a7146b1",
  development: "a13b4176-e328-4e1c-b181-ff676a7146b1",
  production: "6c93762e-ea37-4043-919f-3a758a136943",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ = {
  local: "e0023d91-26bc-4d5d-95ba-3148b6123afc",
  development: "e0023d91-26bc-4d5d-95ba-3148b6123afc",
  production: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_UTBETALING_READ = {
  local: "fc58f7f5-2e9a-497c-a121-e476a91330b5",
  development: "fc58f7f5-2e9a-497c-a121-e476a91330b5",
  production: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
} as const satisfies Dictionary;

const AD_GRUPPE_SOKOS_MF_BUNTKONTROLL_READ = {
  local: "3bc37bf2-8e76-407c-ad4a-d2c79edc241e",
  development: "3bc37bf2-8e76-407c-ad4a-d2c79edc241e",
  production: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
} as const satisfies Dictionary;

export const AzureAdGroupName = {
  AD_GRUPPE_SOKOS_MF_ATTESTASJON_READ: "AD_GRUPPE_SOKOS_MF_ATTESTASJON_READ",
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ:
    "AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ",
  AD_GRUPPE_SOKOS_MF_KRP_READ: "AD_GRUPPE_SOKOS_MF_KRP_READ",
  AD_GRUPPE_SOKOS_MF_KRO_READ: "AD_GRUPPE_SOKOS_MF_KRO_READ",
  AD_GRUPPE_SOKOS_MF_ORS_READ: "AD_GRUPPE_SOKOS_MF_ORS_READ",
  AD_GRUPPE_SOKOS_MF_RESENDING_BANK_READ:
    "AD_GRUPPE_SOKOS_MF_RESENDING_BANK_READ",
  AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ: "AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ",
  AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ: "AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ",
  AD_GRUPPE_SOKOS_MF_UTBETALING_READ: "AD_GRUPPE_SOKOS_MF_UTBETALING_READ",
  AD_GRUPPE_SOKOS_MF_BUNTKONTROLL_READ: "AD_GRUPPE_SOKOS_MF_BUNTKONTROLL_READ",
} as const satisfies Dictionary;

export type AzureAdGroupNames = keyof typeof AzureAdGroupName;

export const AzureAdGroupNameId = {
  AD_GRUPPE_SOKOS_MF_ATTESTASJON_READ:
    AD_GRUPPE_SOKOS_MF_ATTESTASJON_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ:
    AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_KRP_READ: AD_GRUPPE_SOKOS_MF_KRP_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_KRO_READ: AD_GRUPPE_SOKOS_MF_KRO_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_ORS_READ: AD_GRUPPE_SOKOS_MF_ORS_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_RESENDING_BANK_READ:
    AD_GRUPPE_SOKOS_MF_RESENDING_BANK_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ:
    AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ:
    AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_UTBETALING_READ:
    AD_GRUPPE_SOKOS_MF_UTBETALING_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_BUNTKONTROLL_READ:
    AD_GRUPPE_SOKOS_MF_BUNTKONTROLL_READ[getEnvironment()],
} as const satisfies Dictionary;
