import pino from "pino";

export const logger = () =>
  pino({
    timestamp: () => `,"@timestamp":"${new Date(Date.now()).toISOString()}"`,
    formatters: {
      level: (label) => {
        return { level: label.toUpperCase() };
      },
    },
  });
