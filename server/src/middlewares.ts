import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import * as oasis from "@navikt/oasis";
import { logger, secureLog } from "./logger";

const ClaimSchema = z.object({
  name: z.string(),
  NAVident: z.string(),
  groups: z.array(z.string()),
});

export async function enforceAzureADMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const loginPath = `/oauth2/login?redirect=${req.originalUrl}`;
  const { authorization } = req.headers;

  // eslint-disable-next-line no-console
  console.log("authorization", authorization);

  // Not logged in - log in with wonderwall
  if (!authorization) {
    res.redirect(loginPath);
  } else {
    // Validate token and continue to app
    if (await oasis.validateAzureToken(authorization)) {
      next();
    } else {
      res.redirect(loginPath);
    }
  }
}

export async function userInfo(req: Request, res: Response) {
  const token = oasis.getToken(req);
  if (!token) {
    res.status(401).send("Missing token");
    logger.error("Missing token in req");
    throw Error("Missing token in req");
  }
  try {
    const validation = await oasis.validateAzureToken(token);
    if (!validation.ok) {
      res.status(401).send("Invalid token");
      logger.error("Invalid token", validation.error);
      throw validation.error;
    }
    // eslint-disable-next-line no-console
    console.log("validation", validation);
    const parsedClaimResult = ClaimSchema.parse(token);
    const referer = req.get("Referer");
    secureLog.info(
      `Saksbehandler (${parsedClaimResult.name}) med ident (${parsedClaimResult.NAVident}) aksesserer URL (${referer})`,
    );
    res.json({
      navIdent: parsedClaimResult.NAVident,
      name: parsedClaimResult.name,
      adGroups: parsedClaimResult.groups,
    });
  } catch (e) {
    logger.error("Failed to retrieve user info", e);
    res.sendStatus(500);
  }
}
