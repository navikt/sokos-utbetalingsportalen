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

export const requestLogger = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Skip logging for endpoints starting with /internal
  if (req.originalUrl.startsWith("/internal")) {
    return next();
  }

  const token = getToken(req);
  if (token) {
    const validation = await validateAzureToken(token);
    if (validation.ok) {
      logger.info(`${req.method} request to ${req.originalUrl}`);
      secureLog.info(`${req.method} request to ${req.originalUrl} made by:`, {
        user: validation.payload.NAVident,
        headers: req.headers,
      });
    } else {
      logger.warn(`Invalid token for request to ${req.originalUrl}`);
      secureLog.warn(`Invalid token for request to ${req.originalUrl}`);
    }
  } else {
    logger.warn(`No token found for request to ${req.originalUrl}`);
    secureLog.warn(`No token found for request to ${req.originalUrl}`);
  }
  next();
};
