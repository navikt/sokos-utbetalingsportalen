import dotenv from "dotenv";

dotenv.config();

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all
interface ENV {
  // Server env
  PORT: string | undefined;

  // AzureAD env
  AZURE_APP_WELL_KNOWN_URL: string | undefined;
  AZURE_APP_CLIENT_ID: string | undefined;
  AZURE_APP_CLIENT_SECRET: string | undefined;
  AZURE_OPENID_CONFIG_JWKS_URI: string | undefined;
  AZURE_OPENID_CONFIG_TOKEN_ENDPOINT: string | undefined;

  // sokos-mikrofrontend-template
  SOKOS_MIKROFRONTEND_API: string | undefined;
  SOKOS_MIKROFRONTEND_API_SCOPE: string | undefined;
  SOKOS_MIKROFRONTEND_PROXY: string | undefined;
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: string | undefined;
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_WRITE: string | undefined;

  // utbetalinger-frontend-poc
  AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ: string | undefined;
  AD_GRUPPE_SOKOS_MF_UTBETALINGER_WRITE: string | undefined;
}

interface Config {
  // Server env
  PORT: string;

  // AzureAD env
  AZURE_APP_WELL_KNOWN_URL: string;
  AZURE_APP_CLIENT_ID: string;
  AZURE_APP_CLIENT_SECRET: string;
  AZURE_OPENID_CONFIG_JWKS_URI: string;
  AZURE_OPENID_CONFIG_TOKEN_ENDPOINT: string;

  // sokos-mikrofrontend-template
  SOKOS_MIKROFRONTEND_API: string;
  SOKOS_MIKROFRONTEND_API_SCOPE: string;
  SOKOS_MIKROFRONTEND_PROXY: string;
  SOKOS_SKATTEKORT_PERSON: string;
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: string;
  AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_WRITE: string;

  // utbetalinger-frontend-poc
  AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ: string;
  AD_GRUPPE_SOKOS_MF_UTBETALINGER_WRITE: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    // Server env
    PORT: process.env.PORT || "8080",

    // AzureAD env
    AZURE_APP_WELL_KNOWN_URL: process.env.AZURE_APP_WELL_KNOWN_URL,
    AZURE_APP_CLIENT_ID: process.env.AZURE_APP_CLIENT_ID,
    AZURE_APP_CLIENT_SECRET: process.env.AZURE_APP_CLIENT_SECRET,
    AZURE_OPENID_CONFIG_JWKS_URI: process.env.AZURE_OPENID_CONFIG_JWKS_URI,
    AZURE_OPENID_CONFIG_TOKEN_ENDPOINT: process.env.AZURE_OPENID_CONFIG_TOKEN_ENDPOINT,

    // sokos-mikrofrontend-template
    SOKOS_MIKROFRONTEND_API: process.env.SOKOS_MIKROFRONTEND_API,
    SOKOS_MIKROFRONTEND_API_SCOPE: process.env.SOKOS_MIKROFRONTEND_API_SCOPE,
    SOKOS_SKATTEKORT_PERSON: process.env.SOKOS_SKATTEKORT_PERSON,
    SOKOS_MIKROFRONTEND_PROXY: process.env.SOKOS_MIKROFRONTEND_PROXY,
    AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ: process.env.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ,
    AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_WRITE: process.env.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_WRITE,

    // utbetalinger-frontend-poc
    AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ: process.env.AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ,
    AD_GRUPPE_SOKOS_MF_UTBETALINGER_WRITE: process.env.AD_GRUPPE_SOKOS_MF_UTBETALINGER_WRITE,
  };
};

// Throwing an Error if any field was undefined we don't
// want our app to run and ensure
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Server startup failed, missing ${key} env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const Configuration = getSanitzedConfig(config);

export default Configuration;
