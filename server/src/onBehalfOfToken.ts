import { logger } from "./logger";
import Config from "./config";
import { z } from "zod";
import { Client, errors, Issuer, TokenSet } from "openid-client";
import { NextFunction, Request, Response as ExpressResponse } from "express";
import { retrieveTokenFromHeader } from "./middelwares";

let _issuer: Issuer<Client>;
let _client: Client;

const OboTokenSchema = z.object({
  access_token: z.string(),
  expires_in: z.number(),
  token_type: z.string(),
});

type OboToken = z.infer<typeof OboTokenSchema>;
type CachedOboToken = { token: OboToken; expires: number };
type Scope = string;
type AccessToken = string;

const tokenCache: Record<Scope, Record<AccessToken, CachedOboToken>> = {};

async function issuer() {
  _issuer = await Issuer.discover(Config.AZURE_APP_WELL_KNOWN_URL);
  return _issuer;
}

function jwk() {
  return JSON.parse(Config.AZURE_APP_JWK);
}

async function client() {
  const _jwk = jwk();
  const _issuer = await issuer();
  _client = new _issuer.Client(
    {
      client_id: Config.AZURE_APP_CLIENT_ID,
      client_secret: Config.AZURE_APP_CLIENT_SECRET,
      token_endpoint_auth_method: "client_secret_post",
    },
    { keys: [_jwk] },
  );
  return _client;
}

async function fetchNewOnBehalfOfToken(accessToken: string, scope: string) {
  const _client = await client();

  const grantBody = {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: accessToken,
    requested_token_use: "on_behalf_of",
    scope,
  };

  return await _client
    .grant(grantBody)
    .then((tokenSet: TokenSet) => {
      return OboTokenSchema.parse(tokenSet);
    })
    .catch((err) => {
      switch (err.constructor) {
        case errors.OPError:
        case errors.RPError:
          logger.error(`Failed to retrieve on behalf of token for scope "${scope}", got error:`, {
            openIdClientError: err,
            httpStatusFromAzure: err.response.statusCode + " " + err.response.statusMessage,
            azureBody: err.response.azureBody,
          });
          break;
      }
      logger.error("Unknown error from openid-client", { error: err });
      throw err;
    });
}

function oboTokenIsValid(token: CachedOboToken) {
  return token.expires >= Date.now() - 5000;
}

export async function getOnBehalfOfToken(accessToken: string, scope: string) {
  const cachedOboToken = tokenCache[scope]?.[accessToken];

  if (cachedOboToken && oboTokenIsValid(cachedOboToken)) {
    return cachedOboToken.token;
  } else {
    const newOboToken = await fetchNewOnBehalfOfToken(accessToken, scope);
    const expires = Date.now() + newOboToken.expires_in * 1000;

    if (!tokenCache[scope]) {
      tokenCache[scope] = {};
    }
    tokenCache[scope][accessToken] = {
      token: newOboToken,
      expires,
    };

    return newOboToken;
  }
}

export const setOnBehalfOfToken = (scope: string) => async (req: Request, res: ExpressResponse, next: NextFunction) => {
  const accessToken = retrieveTokenFromHeader(req.headers);

  if (!accessToken) {
    res.status(500).send("Cannot request the OBO token as the access token does not exist");
  }

  try {
    const token = await getOnBehalfOfToken(accessToken, scope);
    req.headers.authorization = `Bearer ${token.access_token}`;
    next();
  } catch (e) {
    const respons = e as Response;

    // A 400 Bad Request during OBO exchange means that the user does not belong to the groups required to invoke the app.
    if (respons.status === 400) {
      res.status(403).send(`User does not have access to scope ${scope}`);
    } else {
      logger.error("OBO token exchange error", e);
      res.status(500).send("OBO token exchange error");
    }
  }
};
