import { logger } from "./logger";
import Config from "./config";
import { z } from "zod";

const OboTokenSchema = z.object({
  access_token: z.string(),
  expires_in: z.number(),
  ext_expires_in: z.number(),
  token_type: z.string(),
});

type OboToken = z.infer<typeof OboTokenSchema>;
type CachedOboToken = { token: OboToken; expires: number };
type Scope = string;
type AccessToken = string;

const tokenCache: Record<Scope, Record<AccessToken, CachedOboToken>> = {};

export async function getOnBehalfOfToken(accessToken: string, scope: string) {
  const cachedOboToken = tokenCache[scope]?.[accessToken];

  if (cachedOboToken && isTokenValid(cachedOboToken)) {
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

async function fetchNewOnBehalfOfToken(accessToken: string, scope: string) {
  const formData = {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    scope,
    client_id: Config.AZURE_APP_CLIENT_ID,
    client_secret: Config.AZURE_APP_CLIENT_SECRET,
    assertion: accessToken,
    requested_token_use: "on_behalf_of",
  };

  const url = Config.AZURE_OPENID_CONFIG_TOKEN_ENDPOINT;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const body = await response.json();

    if (response.ok) {
      return OboTokenSchema.parse(body);
    } else {
      logger.error(
        `Failed to retrieve on behalf of token for scope "${scope}", got status ${response.status} (${response.statusText}) reason:`,
        body,
      );

      throw response;
    }
  } catch (e) {
    throw e;
  }
}

function isTokenValid(token: CachedOboToken) {
  return token.expires >= Date.now() - 5000;
}
