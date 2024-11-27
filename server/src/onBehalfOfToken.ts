import { Response as ExpressResponse, NextFunction, Request } from "express";
import * as oasis from "@navikt/oasis";
import { logger } from "./logger";

async function requestOboToken(
  audience: string,
  req: Request,
  res: ExpressResponse,
) {
  const token = oasis.getToken(req);
  if (!token) {
    res.status(401).send("Missing token");
    logger.error("Missing token in req");
    throw Error("Missing token in req");
  }

  const validation = await oasis.validateToken(token);
  if (!validation.ok) {
    res.status(401).send("Invalid token");
    logger.error("Invalid token", validation.error);
    throw validation.error;
  }

  // eslint-disable-next-line no-console
  console.log("audience", audience);
  const obo = await oasis.requestOboToken(token, audience);
  if (!obo.ok) {
    // eslint-disable-next-line no-console
    console.log("Feiler her pga obo token veksling");
    res.status(500).send("Failed to get OBO token");
    logger.error("Failed to get OBO token", obo.error);
    throw obo.error;
  }

  return obo.token;
}

export function setOnBehalfOfToken(apiAudience: string) {
  return async (req: Request, res: ExpressResponse, next: NextFunction) => {
    try {
      const accessToken = await requestOboToken(apiAudience, req, res);
      req.headers.authorization = `Bearer ${accessToken}`;
      next();
    } catch (e) {
      logger.error(e);
      res.status(500);
    }
  };
}
