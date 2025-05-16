import pino from "pino";
import dayjs from "dayjs";
import fs from "fs";

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
