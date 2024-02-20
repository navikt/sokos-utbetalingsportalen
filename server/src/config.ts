import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const ConfigSchema = z.object({
  // NAIS env
  NAIS_APP_NAME: z.string(),
  NAIS_CLUSTER_NAME: z.string(),

  // AzureAD env
  AZURE_APP_WELL_KNOWN_URL: z.string(),
  AZURE_APP_CLIENT_ID: z.string(),
  AZURE_APP_CLIENT_SECRET: z.string(),
  AZURE_OPENID_CONFIG_JWKS_URI: z.string(),
  AZURE_APP_JWK: z.string(),
  AZURE_OPENID_CONFIG_TOKEN_ENDPOINT: z.string(),

  // sokos-op-skattekort
  SOKOS_SKATTEKORT_PERSON_API: z.string(),
  SOKOS_SKATTEKORT_PERSON_API_SCOPE: z.string(),
  SOKOS_SKATTEKORT_PROXY: z.string(),

  // sokos-op-postering-sok
  SOKOS_POSTERING_API: z.string(),
  SOKOS_POSTERING_API_SCOPE: z.string(),
  SOKOS_POSTERING_PROXY: z.string(),

  // sokos-mikrofrontend-template
  SOKOS_MIKROFRONTEND_API: z.string().default(""),
  SOKOS_MIKROFRONTEND_API_SCOPE: z.string().default(""),
  SOKOS_MIKROFRONTEND_PROXY: z.string().default(""),

  // sokos-nav-oppdrag
  SOKOS_NAV_OPPDRAG_API: z.string().default(""),
  SOKOS_NAV_OPPDRAG_API_SCOPE: z.string().default(""),
  SOKOS_NAV_OPPDRAG_PROXY: z.string().default(""),
});

type Config = z.infer<typeof ConfigSchema>;

const getConfig = (): Config => {
  const result = ConfigSchema.safeParse(process.env);

  if (!result.success) {
    throw new Error(`Server startup failed: ${result.error.message}`);
  }

  return result.data;
};

const Config = getConfig();

export default Config;
