import fs from "fs";
import winston, { format } from "winston";

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
