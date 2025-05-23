import pino from "pino";
import dayjs from "dayjs";
import fs from "fs";

// --- OpenTelemetry Setup ---
import { NodeSDK, tracing, logs, api } from "@opentelemetry/sdk-node";
import { PinoInstrumentation } from "@opentelemetry/instrumentation-pino";

// Initialize OpenTelemetry SDK with Pino instrumentation
const sdk = new NodeSDK({
  spanProcessor: new tracing.SimpleSpanProcessor(
    new tracing.ConsoleSpanExporter(),
  ),
  logRecordProcessor: new logs.SimpleLogRecordProcessor(
    new logs.ConsoleLogRecordExporter(),
  ),
  instrumentations: [
    new PinoInstrumentation({
      // See below for Pino instrumentation options.
    }),
  ],
});
sdk.start();
// --- End OpenTelemetry Setup ---

const secureLogPath = () =>
  fs.existsSync("/secure-logs/") ? "/secure-logs/secure.log" : "./secure.log";

// Create a write stream for secure logging
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

// Usage example:
logger.info("Hello from OpenTelemetry-instrumented logger!");
