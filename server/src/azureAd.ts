import { createRemoteJWKSet, FlattenedJWSInput, JWSHeaderParameters, jwtVerify } from "jose";
import { Client, Issuer } from "openid-client";
import { GetKeyFunction } from "jose/dist/types/types";
import { logger } from "./logger";
import Config from "./config";

let azureAdIssuer: Issuer<Client>;
let remoteJWKSet: GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>;

async function discoverAzureAdIssuer() {
  azureAdIssuer = await Issuer.discover(Config.AZURE_APP_WELL_KNOWN_URL);
}

function initializeRemoteJWKSet() {
  remoteJWKSet = createRemoteJWKSet(new URL(Config.AZURE_OPENID_CONFIG_JWKS_URI));
}

export async function tokenIsValid(brukerensAccessToken: string) {
  try {
    const verification = await jwtVerify(brukerensAccessToken, remoteJWKSet, {
      audience: Config.AZURE_APP_CLIENT_ID,
      issuer: azureAdIssuer.metadata.issuer,
    });

    return !!verification.payload;
  } catch (e) {
    logger.error("Something went wrong while validating the token: ", e);
    return false;
  }
}

export async function initializeAzureAd() {
  await discoverAzureAdIssuer()
    .then(initializeRemoteJWKSet)
    .catch((e) => {
      throw Error("Failed to initialize AzureAD: " + e);
    });
}
