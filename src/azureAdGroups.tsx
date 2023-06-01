import { getEnvironment } from "./api/environment";

const AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: Record<string, string> = {
  local: "1b717a23-d376-471c-9fc6-356299fadc2b",
  development: "1b717a23-d376-471c-9fc6-356299fadc2b",
  production: "",
};

const AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_WRITE: Record<string, string> = {
  local: "3269dc21-a724-4b59-bc37-6120d6af2adc",
  development: "3269dc21-a724-4b59-bc37-6120d6af2adc",
  production: "",
};

const AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ: Record<string, string> = {
  local: "b01fb216-fcb3-4ede-b7da-71fffe859763",
  development: "b01fb216-fcb3-4ede-b7da-71fffe859763",
  production: "",
};

const AD_GRUPPE_SOKOS_MF_UTBETALINGER_WRITE: Record<string, string> = {
  local: "a366c33c-7456-4183-a0d5-80eb8195a7da",
  development: "a366c33c-7456-4183-a0d5-80eb8195a7da",
  production: "",
};

export const AzureAdGroupName: AzureGroupName = {
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: "AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ",
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_WRITE: "AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_WRITE",
  AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ: "AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ",
  AD_GRUPPE_SOKOS_MF_UTBETALINGER_WRITE: "AD_GRUPPE_SOKOS_MF_UTBETALINGER_WRITE",
};
export const AzureAdGroupNameId: AzureGroupId = {
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_WRITE: AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_WRITE[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ: AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ[getEnvironment()],
  AD_GRUPPE_SOKOS_MF_UTBETALINGER_WRITE: AD_GRUPPE_SOKOS_MF_UTBETALINGER_WRITE[getEnvironment()],
};

type AzureGroupId = {
  [key: string]: string;
};

type AzureGroupName = {
  [key: string]: string;
};
