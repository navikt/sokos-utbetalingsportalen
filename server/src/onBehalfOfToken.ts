import { logger } from "./logger";

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
  console.log("getOnBehalfOfToken metoden kjøres");
  const cachedOboToken = tokenCache[scope]?.[accessToken];
  console.log("cachedOboToken", cachedOboToken);

  if (cachedOboToken && isTokenValid(cachedOboToken)) {
    console.log("if sjekk på cachedObotoken", cachedOboToken.token);
    return cachedOboToken.token;
  } else {
    console.log("inne i else på cachedObotoken");
    const newOboToken = await fetchNewOnBehalfOfToken(accessToken, scope);
    const expires = Date.now() + newOboToken.expires_in * 1000;
    console.log("newOboToken", newOboToken);
    console.log("expires", expires);

    if (!tokenCache[scope]) {
      console.log("setter cache");
      tokenCache[scope] = {};
    }

    tokenCache[scope][accessToken] = {
      token: newOboToken,
      expires,
    };

    console.log("Kom hele veien hit på getOnBehalfOfToken metoden", newOboToken);

    return newOboToken;
  }
}

async function fetchNewOnBehalfOfToken(accessToken: string, scope: string): Promise<OboToken> {
  console.log("fetchNewOnBehalfOfToken metoden kjører");
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
    client_id: process.env.AZURE_APP_CLIENT_ID || "",
    client_secret: process.env.AZURE_APP_CLIENT_SECRET || "",
    assertion: accessToken,
    requested_token_use: "on_behalf_of",
  };
  console.log("formdata opprettet", formData);

  const url = process.env.AZURE_OPENID_CONFIG_TOKEN_ENDPOINT || "";
  console.log("AZURE_OPENID_CONFIG_TOKEN_ENDPOINT hentet", url);

  // eslint-disable-next-line no-useless-catch
  try {
    console.log("inne i try i fetchNewOnBehalfOfToken metoden");
    const response = await fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    console.log("try ferdig i fetchNewOnBehalfOfToken metoden", response);

    const body = await response.json();

    console.log("body", body);

    if (response.ok) {
      console.log("responsen gikk bra i fetchNewOnBehalfOfToken metoden");
      return body as OboToken;
    } else {
      console.log("error i fetchNewOnBehalfOfToken metoden");
      logger.error(
        `Klarte ikke å hente on behalf of token for scope "${scope}", fikk status ${response.status} (${response.statusText}) årsak: `,
        body
      );

      throw response;
    }
  } catch (e) {
    throw e;
  }
}

function isTokenValid(token: CachedOboToken) {
  console.log("hva skjedde? er ikke token valid?");
  return token.expires >= Date.now() - 5000;
}
