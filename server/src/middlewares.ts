import { NextFunction, Request, Response } from "express";
import * as oasis from "@navikt/oasis";
import { logger, secureLog } from "./logger";

export async function enforceAzureADMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const loginPath = `/oauth2/login?redirect=${req.originalUrl}`;
  const token = oasis.getToken(req);

  // Not logged in - log in with wonderwall
  if (!token) {
    res.redirect(loginPath);
  } else {
    // Validate token and continue to app
    if (await oasis.validateAzureToken(token)) {
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
    secureLog.info(
      `Saksbehandler (${validation.payload.name}) med ident (${validation.payload.NAVident}) aksesserer URL (${req.get("Referer")})`,
    );
    res.json({
      navIdent: validation.payload.NAVident,
      name: validation.payload.name,
      adGroups: validation.payload.groups,
    });
  } catch (e) {
    logger.error("Failed to retrieve user info", e);
    res.sendStatus(500);
  }
}
