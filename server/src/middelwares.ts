import { IncomingHttpHeaders } from "http";
import { NextFunction, Request, Response as ExpressResponse } from "express";
import { tokenIsValid } from "./azureAd";
import { decodeJwt } from "jose";
import { getOnBehalfOfToken } from "./onBehalfOfToken";
import { getUserAccesses } from "./microsoftGraphApi";

type UserInformation = {
  navIdent: string;
  name: string;
};

const navIdentClaim = "NAVident";
const nameClaim = "name";

function getUserInformation(token: string): UserInformation {
  const claims = decodeJwt(token);
  const navIdent = String(claims[navIdentClaim]);
  const name = String(claims[nameClaim]);
  return { navIdent, name };
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
    throw Error("Failed to retrieve token");
  }
  return userAccessToken;
}

export async function isUserLoggedIn(req: Request): Promise<boolean> {
  const userAccessToken = retrieveToken(req.headers);
  return !!userAccessToken && (await tokenIsValid(userAccessToken));
}

export async function fetchUserData(req: Request, res: ExpressResponse) {
  const userAccessToken = retrieveToken(req.headers);
  const userInformation = getUserInformation(userAccessToken);
  const adGroups = await getUserAccesses(userAccessToken);

  console.log("adGroups", adGroups);

  res.status(200).json({
    ...userInformation,
    ...adGroups,
  });
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
