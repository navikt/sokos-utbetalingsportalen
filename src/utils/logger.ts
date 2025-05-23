import { logs, NodeSDK, tracing } from "@opentelemetry/sdk-node";
import dayjs from "dayjs";
import fs from "fs";
import pino from "pino";

const sdk = new NodeSDK({
  spanProcessor: new tracing.SimpleSpanProcessor(
    new tracing.ConsoleSpanExporter(),
  ),
  logRecordProcessor: new logs.SimpleLogRecordProcessor(
    new logs.ConsoleLogRecordExporter(),
  ),
});

sdk.start();

const secureLogPath = () =>
  fs.existsSync("/secure-logs/") ? "/secure-logs/secure.log" : "./secure.log";

const secureLogStream = fs.createWriteStream(secureLogPath(), { flags: "a" });

export const logger = pino({
  timestamp: () => `,"@timestamp":"${dayjs().format("YYYY-MM-DD HH:mm:ss")}"`,
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() };
    },
  },
});

export const secureLogger = pino(
  {
    timestamp: () => `,"@timestamp":"${dayjs().format("YYYY-MM-DD HH:mm:ss")}"`,
    formatters: {
      level: (label) => {
        return { level: label.toUpperCase() };
      },
    },
  },
  secureLogStream,
);
