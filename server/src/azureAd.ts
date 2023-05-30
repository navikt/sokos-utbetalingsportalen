import { createRemoteJWKSet, FlattenedJWSInput, JWSHeaderParameters, jwtVerify } from "jose";
import { Client, Issuer } from "openid-client";
import { GetKeyFunction } from "jose/dist/types/types";
import { logger } from "./logger";
import Configuration from "./config";

let azureAdIssuer: Issuer<Client>;
let remoteJWKSet: GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>;

async function discoverAzureAdIssuer() {
  const discoveryUrl = Configuration.AZURE_APP_WELL_KNOWN_URL;
  if (discoveryUrl) {
    azureAdIssuer = await Issuer.discover(discoveryUrl);
  } else {
    throw Error(`Environment "AZURE_APP_WELL_KNOWN_URL" must be defined`);
  }
}

function initializeRemoteJWKSet() {
  const jwksUri = Configuration.AZURE_OPENID_CONFIG_JWKS_URI;
  const jwksUrl = new URL(jwksUri);
  remoteJWKSet = createRemoteJWKSet(jwksUrl);
}

export async function tokenIsValid(brukerensAccessToken: string) {
  const clientId = Configuration.AZURE_APP_CLIENT_ID;
  try {
    const verification = await jwtVerify(brukerensAccessToken, remoteJWKSet, {
      audience: clientId,
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
