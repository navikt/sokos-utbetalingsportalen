import { logger } from "./logger";
import Configuration from "./config";

type OboToken = {
  access_token: string;
  expires_in: number;
  ext_expires_in: number;
  token_type: string;
};

type CachedOboToken = {
  token: OboToken;
  expires: number;
};

type Scope = string;

export type AccessToken = string;

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
  const formData: {
    grant_type: string;
    requested_token_use: string;
    scope: string;
    assertion: string;
    client_secret: string;
    client_id: string;
  } = {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    scope,
    client_id: Configuration.AZURE_APP_CLIENT_ID,
    client_secret: Configuration.AZURE_APP_CLIENT_SECRET,
    assertion: accessToken,
    requested_token_use: "on_behalf_of",
  };

  const url = Configuration.AZURE_OPENID_CONFIG_TOKEN_ENDPOINT;

  // eslint-disable-next-line no-useless-catch
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
      return body as OboToken;
    } else {
      logger.error(
        `Failed to retrieve on behalf of token for scope "${scope}", got status ${response.status} (${response.statusText}) reason:`,
        body
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
