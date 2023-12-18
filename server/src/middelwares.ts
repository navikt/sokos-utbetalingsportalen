import { NextFunction, Request, Response } from "express";
import { validateToken } from "./azureAd";
import { auditLog, logger, secureLog } from "./logger";
import { IncomingHttpHeaders } from "http";
import { z } from "zod";

const ClaimSchema = z.object({
  name: z.string(),
  NAVident: z.string(),
  groups: z.array(z.string()),
});

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
  const loginPath = `/oauth2/login?redirect=${req.originalUrl}`;
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
    const parsedClaimResult = ClaimSchema.parse(JWTVerifyResult.payload);
    secureLog.info(
      "Saksbehandler (" +
        parsedClaimResult.name +
        ") med ident (" +
        parsedClaimResult.NAVident +
        ") har logget inn med følgende tilgang til grupper (" +
        parsedClaimResult.groups +
        ")",
    );
    res.json({
      navIdent: parsedClaimResult.NAVident,
      name: parsedClaimResult.name,
      adGroups: parsedClaimResult.groups,
    });
  } catch (e) {
    logger.error("AzureUserInfo", e);
    res.sendStatus(500);
  }
}
