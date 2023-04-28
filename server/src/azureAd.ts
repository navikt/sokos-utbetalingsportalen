import { createRemoteJWKSet, decodeJwt, FlattenedJWSInput, JWSHeaderParameters, jwtVerify } from "jose";
import { Client, Issuer } from "openid-client";
import { GetKeyFunction } from "jose/dist/types/types";
import { logger } from "./logger";

const discoveryUrl =
  "https://login.microsoftonline.com/966ac572-f5b7-4bbe-aa88-c76419c0f851/v2.0/.well-known/openid-configuration";
const clientId = process.env.AZURE_APP_CLIENT_ID;
const jwksUri = "https://login.microsoftonline.com/966ac572-f5b7-4bbe-aa88-c76419c0f851/discovery/v2.0/keys";

let azureAdIssuer: Issuer<Client>;
let remoteJWKSet: GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>;

async function discoverAzureAdIssuer() {
  if (discoveryUrl) {
    azureAdIssuer = await Issuer.discover(discoveryUrl);
  } else {
    throw Error(`Miljøvariabelen "AZURE_APP_WELL_KNOWN_URL" må være definert`);
  }
}

function initializeRemoteJWKSet() {
  const jwksUrl = new URL(jwksUri || "");
  remoteJWKSet = createRemoteJWKSet(jwksUrl);
}

export async function tokenIsValid(brukerensAccessToken: string) {
  try {
    const verification = await jwtVerify(brukerensAccessToken, remoteJWKSet, {
      audience: clientId,
      issuer: azureAdIssuer.metadata.issuer,
    });

    return !!verification.payload;
  } catch (e) {
    logger.error("Noe galt skjedde under validering av token:", e);
    return false;
  }
}

export async function initializeAzureAd() {
  await discoverAzureAdIssuer()
    .then(initializeRemoteJWKSet)
    .catch((e) => {
      throw Error("Klarte ikke å initialisere AzureAD:" + e);
    });
}
