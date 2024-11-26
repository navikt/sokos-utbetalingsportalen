import { Response as ExpressResponse, NextFunction, Request } from "express";
import * as openIdClient from "openid-client";
import { TokenEndpointResponse } from "openid-client";
import { z } from "zod";
import { getConfig } from "./azureAd";
import { logger } from "./logger";
import { retrieveTokenFromHeader } from "./middlewares";

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

interface ExchangeToken {
  (token: string, targetApp: string): Promise<TokenEndpointResponse>;
}

interface OboAuth {
  getOboToken: ExchangeToken;
}

async function createOboTokenDings(): Promise<OboAuth> {
  return {
    async getOboToken(accessToken, scope) {
      try {
        const config = await getConfig();
        return await openIdClient.genericGrantRequest(
          config,
          "urn:ietf:params:oauth:grant-type:jwt-bearer",
          {
            requested_token_use: "on_behalf_of",
            client_assertion_type:
              "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
            scope,
            assertion: accessToken,
            subject_token_type: "urn:ietf:params:oauth:token-type:jwt",
            subject_token: accessToken,
            audience: scope,
          },
        );
      } catch (err) {
        logger.error(`Feil ved generering av OBO-token: ${err}`);
        return Promise.reject(err);
      }
    },
  };
}

let _oboTokenDings: OboAuth | undefined;
const getOboTokenDings = async (): Promise<OboAuth> => {
  if (!_oboTokenDings) {
    _oboTokenDings = await createOboTokenDings();
  }
  return _oboTokenDings;
};

function oboTokenIsValid(token: CachedOboToken) {
  return token.expires >= Date.now() - 5000;
}

async function getOnBehalfOfToken(accessToken: string, scope: string) {
  const cachedOboToken = tokenCache[scope]?.[accessToken];

  if (cachedOboToken && oboTokenIsValid(cachedOboToken)) {
    return cachedOboToken.token;
  } else {
    const newOboToken = await (
      await getOboTokenDings()
    ).getOboToken(accessToken, scope);
    const expires = Date.now() + newOboToken.expires_in! * 1000;

    if (!tokenCache[scope]) {
      tokenCache[scope] = {};
    }

    tokenCache[scope][accessToken] = {
      token: OboTokenSchema.parse(newOboToken),
      expires,
    };

    return newOboToken;
  }
}

export const getTokenFromRequest = (req: Request) => {
  const bearerToken = req.headers["authorization"];
  return bearerToken?.replace("Bearer ", "");
};

export function setOnBehalfOfToken(scope: string) {
  return async (req: Request, res: ExpressResponse, next: NextFunction) => {
    const accessToken = retrieveTokenFromHeader(req.headers);

    if (!accessToken) {
      res
        .status(500)
        .send(
          "Cannot request the OBO token as the access token does not exist",
        );
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
}
