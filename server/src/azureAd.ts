import { createRemoteJWKSet, decodeJwt, FlattenedJWSInput, JWSHeaderParameters, jwtVerify } from "jose";
import { Client, Issuer } from "openid-client";
import { Request, RequestHandler, Response } from "express";
import { GetKeyFunction } from "jose/dist/types/types";
import { IncomingHttpHeaders } from "http";
import { logger } from "./logger";
import { BrukerInformasjon } from "./models";

const discoveryUrl = process.env.AZURE_APP_WELL_KNOWN_URL;
const clientId = process.env.AZURE_APP_CLIENT_ID;
const jwksUri = process.env.AZURE_OPENID_CONFIG_JWKS_URI;

let azureAdIssuer: Issuer<Client>;
let remoteJWKSet: GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>;

const navIdentClaim = "NAVident";
const nameClaim = "name";

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

async function tokenIsValid(brukerensAccessToken: string) {
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

function hentNavIdent(token: string): BrukerInformasjon {
  const claims = decodeJwt(token);
  const navIdent = String(claims[navIdentClaim]) || "";
  const name = String(claims[nameClaim]) || "";
  return { navIdent, name };
}

function retrieveToken(headers: IncomingHttpHeaders) {
  const brukerensAccessToken = headers.authorization?.replace("Bearer ", "");
  if (!brukerensAccessToken) {
    throw Error("Kunne ikke hente token");
  }
  return brukerensAccessToken;
}

export async function userIsLoggedIn(req: Request): Promise<boolean> {
  const brukerensAccessToken = retrieveToken(req.headers);
  return !!brukerensAccessToken && (await tokenIsValid(brukerensAccessToken));
}

export const hentBrukerIdent: RequestHandler = async (req: Request, res: Response) => {
  const brukerensAccessToken = retrieveToken(req.headers);
  const brukerInformasjon = hentNavIdent(brukerensAccessToken);

  res.status(200).json({
    ...brukerInformasjon,
  });
};

export async function initializeAzureAd() {
  await discoverAzureAdIssuer()
    .then(initializeRemoteJWKSet)
    .catch((e) => {
      throw Error("Klarte ikke å initialisere AzureAD:" + e);
    });
}
