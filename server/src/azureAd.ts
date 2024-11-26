import {
  FlattenedJWSInput,
  JWSHeaderParameters,
  createRemoteJWKSet,
  jwtVerify,
} from "jose";
import { GetKeyFunction } from "jose/dist/types/types";
import * as openIdClient from "openid-client";
import Configuration from "./config";

let _remoteJWKSet: GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>;
let _config: openIdClient.Configuration | null = null;

function getAzureAdOptions() {
  const clientId = Configuration.AZURE_APP_CLIENT_ID;
  const discoveryUrl = Configuration.AZURE_APP_WELL_KNOWN_URL;
  const clientSecret = Configuration.AZURE_APP_CLIENT_SECRET;

  return {
    clientId,
    discoveryUrl,
    clientSecret,
  };
}

async function jwks() {
  _remoteJWKSet = createRemoteJWKSet(
    new URL(Configuration.AZURE_OPENID_CONFIG_JWKS_URI),
  );
  return _remoteJWKSet;
}

export async function getConfig(): Promise<openIdClient.Configuration> {
  if (_config) {
    return _config;
  }

  const { clientId, discoveryUrl, clientSecret } = getAzureAdOptions();
  _config = await openIdClient.discovery(
    new URL(discoveryUrl),
    clientId,
    clientSecret,
  );
  return _config;
}

export async function validateToken(token: string | Uint8Array) {
  return jwtVerify(token, await jwks(), {
    issuer: (await getConfig()).serverMetadata().issuer,
  });
}
