import fs from "fs";
import winston, { format } from "winston";
import winstonSyslog from "winston-syslog";
import Config from "./config";
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

export const auditLog = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: winston.format.printf(({ message }) => message),
  transports: [
    new winstonSyslog.Syslog({
      host: "audit.nais",
      port: 6514,
      app_name: Config.NAIS_APP_NAME,
      protocol: "tcp",
      eol: "\n", // Trengs for å kunne logge til rsyslog server
    }),
  ],
});
