import pino from "pino";
import dayjs from "dayjs";

export const logger = pino({
  timestamp: () => `,"@timestamp":"${dayjs().format("YYYY-MM-DD HH:mm:ss")}"`,
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() };
    },
  },
});
