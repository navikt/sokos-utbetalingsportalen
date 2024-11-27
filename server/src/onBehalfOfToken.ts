import { Response as ExpressResponse, NextFunction, Request } from "express";
import { getToken, requestOboToken, validateAzureToken } from "@navikt/oasis";
import { logger } from "./logger";

async function oboTokenExchange(
  audience: string,
  req: Request,
  res: ExpressResponse,
) {
  const token = getToken(req);
  if (!token) {
    res.status(401).send("Missing token");
    logger.error("Missing token in req");
    throw Error("Missing token in req");
  }

  const validation = await validateAzureToken(token);
  if (!validation.ok) {
    res.status(401).send("Invalid token");
    logger.error("Invalid token", validation.error);
    throw validation.error;
  }

  const obo = await requestOboToken(token, audience);
  if (!obo.ok) {
    res.status(500).send("Failed to get OBO token");
    logger.error("Failed to get OBO token", obo.error);
    throw obo.error;
  }

  return obo.token;
}

export function setOnBehalfOfToken(apiAudience: string) {
  return async (req: Request, res: ExpressResponse, next: NextFunction) => {
    try {
      const accessToken = await oboTokenExchange(apiAudience, req, res);
      req.headers.authorization = `Bearer ${accessToken}`;
      next();
    } catch (e) {
      logger.error(e);
      res.status(500);
    }
  };
}
