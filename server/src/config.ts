import dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
  AZURE_APP_WELL_KNOWN_URL: string;
  AZURE_APP_CLIENT_ID: string;
  AZURE_APP_CLIENT_SECRET: string;
  AZURE_OPENID_CONFIG_JWKS_URI: string;
  AZURE_OPENID_CONFIG_TOKEN_ENDPOINT: string;

  NAIS_CLUSTER_NAME: string;

  SOKOS_MIKROFRONTEND_API_URL: string;
}

const getConfig = (): EnvConfig => {
  return {
    AZURE_APP_WELL_KNOWN_URL: process.env.AZURE_APP_WELL_KNOWN_URL || "",
    AZURE_APP_CLIENT_ID: process.env.AZURE_APP_CLIENT_ID || "",
    AZURE_APP_CLIENT_SECRET: process.env.AZURE_APP_CLIENT_SECRET || "",
    AZURE_OPENID_CONFIG_JWKS_URI: process.env.AZURE_OPENID_CONFIG_JWKS_URI || "",
    AZURE_OPENID_CONFIG_TOKEN_ENDPOINT: process.env.AZURE_OPENID_CONFIG_TOKEN_ENDPOINT || "",
    NAIS_CLUSTER_NAME: process.env.NAIS_CLUSTER_NAME || "",
    SOKOS_MIKROFRONTEND_API_URL: process.env.SOKOS_MIKROFRONTEND_API_URL || "",
  };
};

// Throwing an Error if any field was undefined we don't
// want our app to run and ensure
// that these fields are accessible. If all is good return
// it as EnvConfig which just removes the undefined from our type
// definition.

const getSanitzedConfig = (config: EnvConfig): EnvConfig => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key}`);
    }
  }
  return config as EnvConfig;
};

const config = getConfig();

const Configuration = getSanitzedConfig(config);

export default Configuration;
