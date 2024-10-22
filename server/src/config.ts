import dotenv from "dotenv";
import { z } from "zod";

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

  // sokos-spk-mottak
  SOKOS_SPK_MOTTAK_API: z.string().default(""),
  SOKOS_SPK_MOTTAK_API_SCOPE: z.string().default(""),
  SOKOS_SPK_MOTTAK_PROXY: z.string().default(""),

  // sokos-up-ors-api
  SOKOS_UP_ORS_API: z.string(),
  SOKOS_UP_ORS_API_SCOPE: z.string(),
  SOKOS_UP_ORS_API_PROXY: z.string(),

  // sokos-up-kontoregister-api
  SOKOS_KONTOREGISTER_API: z.string(),
  SOKOS_KONTOREGISTER_API_SCOPE: z.string(),
  SOKOS_KONTOREGISTER_API_PROXY: z.string(),

  // sokos-nav-oppdrag
  SOKOS_OPPDRAG_API: z.string().default(""),
  SOKOS_OPPDRAG_API_SCOPE: z.string().default(""),
  SOKOS_OPPDRAG_PROXY: z.string().default(""),

  // sokos-ur-iso
  SOKOS_UR_ISO: z.string().default(""),
  SOKOS_UR_ISO_SCOPE: z.string().default(""),
  SOKOS_UR_ISO_PROXY: z.string().default(""),

  // sokos-utbetaling-api
  SOKOS_UTBETALING_API: z.string().default(""),
  SOKOS_UTBETALING_API_SCOPE: z.string().default(""),
  SOKOS_UTBETALING_API_PROXY: z.string().default(""),
});

type Config = z.infer<typeof ConfigSchema>;

const getConfig = (): Config => {
  const result = ConfigSchema.safeParse(process.env);

  if (!result.success) {
    throw new Error(`Server startup failed: ${result.error.message}`);
  }

  return result.data;
};

const Configuration = getConfig();

export default Configuration;
