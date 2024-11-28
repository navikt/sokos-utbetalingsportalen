import { NextFunction, Request, Response } from "express";
import fs from "fs";
import winston, { format } from "winston";
import { getToken, validateAzureToken } from "@navikt/oasis";

const { timestamp, json } = format;

export const logger = winston.createLogger({
  format: winston.format.combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    json(),
  ),
  transports: [new winston.transports.Console()],
});

const secureLogPath = () =>
  fs.existsSync("/secure-logs/") ? "/secure-logs/secure.log" : "./secure.log";

export const secureLog = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: secureLogPath(),
      maxsize: 50000000,
    }),
  ],
});

export const requestSecurelogInfo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Skip logging for endpoints starting with /internal or /assets
  if (
    req.originalUrl.startsWith("/internal") ||
    req.originalUrl.startsWith("/assets")
  ) {
    return next();
  }

  const token = getToken(req);
  if (!token) {
    logger.warn(`Invalid token for request to ${req.originalUrl}`);
    return next();
  }

  const validation = await validateAzureToken(token);
  if (validation.ok) {
    secureLog.info(
      `${req.method} request to ${req.originalUrl} made by: ${validation.payload.NAVident}`,
    );
  }

  next();
};
