"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditLog = exports.secureLog = exports.logger = void 0;
const fs_1 = __importDefault(require("fs"));
const winston_1 = __importDefault(require("winston"));
const winston_syslog_1 = __importDefault(require("winston-syslog"));
const { NAIS_APP_NAME } = process.env;
exports.logger = winston_1.default.createLogger({
  format: winston_1.default.format.json(),
  transports: [new winston_1.default.transports.Console()],
});
const secureLogPath = () => (fs_1.default.existsSync("/secure-logs/") ? "/secure-logs/secure.log" : "./secure.log");
exports.secureLog = winston_1.default.createLogger({
  format: winston_1.default.format.json(),
  transports: [
    new winston_1.default.transports.File({
      filename: secureLogPath(),
      maxsize: 50000000,
    }),
  ],
});
exports.auditLog = winston_1.default.createLogger({
  levels: winston_1.default.config.syslog.levels,
  format: winston_1.default.format.printf(({ message }) => message),
  transports: [
    new winston_syslog_1.default.Syslog({
      host: "audit.nais",
      port: 6514,
      app_name: NAIS_APP_NAME,
      protocol: "tcp",
      eol: "\n", // Trengs for å kunne logge til rsyslog server
    }),
  ],
});
