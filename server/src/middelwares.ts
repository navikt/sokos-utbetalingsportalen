import { NextFunction, Request, Response } from "express";
import { validateToken } from "./azureAd";
import { logger } from "./logger";
import { IncomingHttpHeaders } from "http";

async function validateAuthorization(authorization: string) {
  try {
    const token = authorization.split(" ")[1];
    const JWTVerifyResult = await validateToken(token);
    return !!JWTVerifyResult?.payload;
  } catch (e) {
    logger.error("Azure AD error", e);
    return false;
  }
}

export async function enforceAzureADMiddleware(req: Request, res: Response, next: NextFunction) {
  const loginPath = `/oauth2/login?redirect=${req.originalUrl}/`;
  const { authorization } = req.headers;

  // Not logged in - log in with wonderwall
  if (!authorization) {
    res.redirect(loginPath);
  } else {
    // Validate token and continue to app
    if (await validateAuthorization(authorization)) {
      next();
    } else {
      res.redirect(loginPath);
    }
  }
}

export function retrieveTokenFromHeader(headers: IncomingHttpHeaders) {
  const userAccessToken = headers.authorization?.split(" ")[1];
  if (!userAccessToken) {
    throw new Error("Failed to retrieve token");
  }
  return userAccessToken;
}

export async function azureUserInfo(req: Request, res: Response) {
  const token = retrieveTokenFromHeader(req.headers);
  try {
    const JWTVerifyResult = await validateToken(token);
    res.json({
      navIdent: JWTVerifyResult.payload.navIdent,
      name: JWTVerifyResult.payload.name,
      groups: JWTVerifyResult.payload.groups,
    });
  } catch (e) {
    logger.error("AzureUserInfo", e);
    res.sendStatus(500);
  }
}
