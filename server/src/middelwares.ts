import { z } from "zod";
import { IncomingHttpHeaders } from "http";
import { NextFunction, Request, Response as ExpressResponse } from "express";
import { tokenIsValid } from "./azureAd";
import { decodeJwt, jwtVerify } from "jose";
import { getOnBehalfOfToken } from "./onBehalfOfToken";
import { getUserAccesses } from "./microsoftGraphApi";

const navIdentClaim = "NAVident";
const nameClaim = "name";

const claimSchema = z.object({
  [navIdentClaim]: z.string(),
  [nameClaim]: z.string(),
});

function getUserInformation(token: string) {
  const claims = decodeJwt(token);
  const validatedClaim = claimSchema.parse(claims);
  return { navIdent: validatedClaim[navIdentClaim], name: validatedClaim[nameClaim] };
}

export async function redirectIfUnauthorized(req: Request, res: ExpressResponse, next: NextFunction) {
  if (await isUserLoggedIn(req)) {
    next();
  } else {
    res.redirect(`/oauth2/login?redirect=${req.originalUrl}`);
  }
}

export async function respondUnauthorizedIfNotLoggedIn(req: Request, res: ExpressResponse, next: NextFunction) {
  if (await isUserLoggedIn(req)) {
    next();
  } else {
    res.status(401).send("User dont have a valid session");
  }
}

export function retrieveToken(headers: IncomingHttpHeaders) {
  const userAccessToken = headers.authorization?.replace("Bearer ", "");
  if (!userAccessToken) {
    throw new Error("Failed to retrieve token");
  }
  return userAccessToken;
}

export async function isUserLoggedIn(req: Request) {
  const userAccessToken = retrieveToken(req.headers);
  return !!userAccessToken && (await tokenIsValid(userAccessToken));
}

export async function fetchUserData(req: Request, res: ExpressResponse) {
  const userAccessToken = retrieveToken(req.headers);
  const userInformation = getUserInformation(userAccessToken);
  const adGroups = await getUserAccesses(userAccessToken);

  const responseData = {
    name: userInformation.name,
    navIdent: userInformation.navIdent,
    adGroups: adGroups,
  };

  res.status(200).send(responseData).json();
}

export const setOnBehalfOfToken = (scope: string) => async (req: Request, res: ExpressResponse, next: NextFunction) => {
  const accessToken = retrieveToken(req.headers);

  if (!accessToken) {
    res.status(500).send("Cannot request the OBO token as the access token does not exist");
  } else {
    try {
      const token = await getOnBehalfOfToken(accessToken, scope);
      req.headers.authorization = `Bearer ${token.access_token}`;
      next();
    } catch (e) {
      const respons = e as Response;

      // 400 Bad request under OBO-veksling betyr at bruker
      // ikke tilhører gruppene som kreves for å kalle appen.
      if (respons.status === 400) {
        res.status(403).send(`User does not have access to scope ${scope}`);
      } else {
        res.status(respons.status).send(respons.statusText);
      }
    }
  }
};
