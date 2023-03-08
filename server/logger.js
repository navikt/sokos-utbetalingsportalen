import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      timestamp: true,
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    }),
  ],
});

export default logger;
