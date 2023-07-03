import { getEnvironment } from "../utils/environment";

const AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: Record<string, string> = {
  local: "1b717a23-d376-471c-9fc6-356299fadc2b",
  development: "1b717a23-d376-471c-9fc6-356299fadc2b",
  production: "",
};

const AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ: Record<string, string> = {
  local: "b01fb216-fcb3-4ede-b7da-71fffe859763",
  development: "b01fb216-fcb3-4ede-b7da-71fffe859763",
  production: "",
};

const AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ: Record<string, string> = {
  local: "a13b4176-e328-4e1c-b181-ff676a7146b1",
  development: "a13b4176-e328-4e1c-b181-ff676a7146b1",
  production: "",
};

export const AzureAdGroupName: AzureGroupName = {
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: "AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ",
  AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ: "AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ",
  AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ: "AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ",
};
export const AzureAdGroupNameId: AzureGroupId = {
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ: AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ: AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ[getEnvironment()],
};

type AzureGroupId = {
  [key: string]: string;
};

type AzureGroupName = {
  [key: string]: string;
};
