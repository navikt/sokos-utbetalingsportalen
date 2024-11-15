import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const ApiConfigSchema = z.object({
  apiUrl: z.string(),
  apiScope: z.string(),
  apiProxy: z.string(),
  production: z.boolean(),
});

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

  // Config items
  apiConfig: z.array(ApiConfigSchema),
});

type Config = z.infer<typeof ConfigSchema>;

const getConfig = (): Config => {
  const result = ConfigSchema.safeParse({
    ...process.env,
    apiConfig: [
      {
        apiUrl: process.env.SOKOS_SKATTEKORT_PERSON_API,
        apiScope: process.env.SOKOS_SKATTEKORT_PERSON_API_SCOPE,
        apiProxy: process.env.SOKOS_SKATTEKORT_PROXY,
        production: true,
      },
      {
        apiUrl: process.env.SOKOS_SPK_MOTTAK_API,
        apiScope: process.env.SOKOS_SPK_MOTTAK_API_SCOPE,
        apiProxy: process.env.SOKOS_SPK_MOTTAK_PROXY,
        production: false,
      },
      {
        apiUrl: process.env.SOKOS_UP_ORS_API,
        apiScope: process.env.SOKOS_UP_ORS_API_SCOPE,
        apiProxy: process.env.SOKOS_UP_ORS_API_PROXY,
        production: true,
      },
      {
        apiUrl: process.env.SOKOS_KONTOREGISTER_API,
        apiScope: process.env.SOKOS_KONTOREGISTER_API_SCOPE,
        apiProxy: process.env.SOKOS_KONTOREGISTER_API_PROXY,
        production: true,
      },
      {
        apiUrl: process.env.SOKOS_OPPDRAG_API,
        apiScope: process.env.SOKOS_OPPDRAG_API_SCOPE,
        apiProxy: process.env.SOKOS_OPPDRAG_PROXY,
        production: false,
      },
      {
        apiUrl: process.env.SOKOS_UR_ISO,
        apiScope: process.env.SOKOS_UR_ISO_SCOPE,
        apiProxy: process.env.SOKOS_UR_ISO_PROXY,
        production: true,
      },
      {
        apiUrl: process.env.SOKOS_UTBETALING_API,
        apiScope: process.env.SOKOS_UTBETALING_API_SCOPE,
        apiProxy: process.env.SOKOS_UTBETALING_API_PROXY,
        production: false,
      },
    ],
  });

  if (!result.success) {
    throw new Error(`Server startup failed: ${result.error.message}`);
  }

  return result.data;
};

const Configuration = getConfig();

export default Configuration;
