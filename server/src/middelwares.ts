import { IncomingHttpHeaders } from "http";
import { NextFunction, Request, Response as ExpressResponse } from "express";
import { tokenIsValid } from "./azureAd";
import { decodeJwt } from "jose";
import { getOnBehalfOfToken } from "./onBehalfOfToken";

type BrukerInformasjon = {
  navIdent: string;
  name: string;
};

const navIdentClaim = "NAVident";
const nameClaim = "name";

function getNavIdent(token: string): BrukerInformasjon {
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
    res.status(401).send("Brukeren har ingen gyldig sesjon");
  }
}

export function retrieveToken(headers: IncomingHttpHeaders) {
  const brukerensAccessToken = headers.authorization?.replace("Bearer ", "");
  if (!brukerensAccessToken) {
    throw Error("Kunne ikke hente token");
  }
  return brukerensAccessToken;
}

export async function isUserLoggedIn(req: Request): Promise<boolean> {
  const brukerensAccessToken = retrieveToken(req.headers);
  return !!brukerensAccessToken && (await tokenIsValid(brukerensAccessToken));
}

export async function fetchUserId(req: Request, res: ExpressResponse) {
  const brukerensAccessToken = retrieveToken(req.headers);
  const brukerInformasjon = getNavIdent(brukerensAccessToken);

  res.status(200).json({
    ...brukerInformasjon,
  });
}

export const setOnBehalfOfToken = (scope: string) => async (req: Request, res: ExpressResponse, next: NextFunction) => {
  const accessToken = retrieveToken(req.headers);

  if (!accessToken) {
    res.status(500).send("Kan ikke be om OBO-token siden access-token ikke finnes");
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
        res.status(403).send(`Bruker har ikke tilgang til scope ${scope}`);
      } else {
        res.status(respons.status).send(respons.statusText);
      }
    }
  }
};
