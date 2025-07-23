/* import { logs, NodeSDK, tracing } from "@opentelemetry/sdk-node";
import { logger } from "./logger/index";

// configure the SDK to export telemetry data to the console
// enable all auto-instrumentations from the meta package
const sdk = new NodeSDK({
  spanProcessor: new tracing.SimpleSpanProcessor(
    new tracing.ConsoleSpanExporter(),
  ),
  logRecordProcessor: new logs.SimpleLogRecordProcessor(
    new logs.ConsoleLogRecordExporter(),
  ),
});

// initialize the SDK and register with the OpenTelemetry API
// this enables the API to record telemetry
sdk.start();

// gracefully shut down the SDK on process exit
process.on("SIGTERM", () => {
  sdk
    .shutdown()
    .then(() => logger.info("Opentelemetry Tracing terminated"))
    .catch((error) =>
      logger.error("Error terminating Opentelemetry Tracing", error),
    )
    .finally(() => process.exit(0));
}); */

/*
const secureLogPath = () =>
  fs.existsSync("/secure-logs/") ? "/secure-logs/secure.log" : "./secure.log";

const secureLogStream = pino.destination({
  dest: secureLogPath(),
  sync: false,
});

export const logger = pino({
  timestamp: () => `,"@timestamp":"${new Date().toISOString()}"`,
  formatters: {
    level: (label) => ({ level: label.toUpperCase() }),
  },
});

export const secureLogger = pino(
  {
    timestamp: () => `,"@timestamp":"${new Date().toISOString()}"`,
    formatters: {
      level: (label) => ({ level: label.toUpperCase() }),
    },
  },
  secureLogStream,
);
 */
