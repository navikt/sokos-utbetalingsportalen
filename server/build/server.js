"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_static_gzip_1 = __importDefault(require("express-static-gzip"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const azureAd_1 = require("./azureAd");
const logger_1 = require("./logger");
const BASE_PATH = "/okonomiportalen";
const BUILD_PATH = path_1.default.resolve(__dirname, "../dist");
const PORT = process.env.APP_PORT || 8080;
const server = (0, express_1.default)();
const startServer = () => {
  server.use(express_1.default.urlencoded());
  server.use(express_1.default.json());
  server.disable("x-powered-by");
  server.use(
    BASE_PATH,
    (0, express_static_gzip_1.default)(BUILD_PATH, {
      index: false,
      enableBrotli: true,
      orderPreference: ["br"],
    }),
    (0, express_rate_limit_1.default)({
      windowMs: 10 * 1000,
      max: 20,
    })
  );
  server.use(`/assets`, express_1.default.static(`${BUILD_PATH}/assets`));
  server.get("/brukerident", azureAd_1.hentBrukerIdent);
  server.get([`${BASE_PATH}/internal/isAlive`, `${BASE_PATH}/internal/isReady`], (_req, res) => res.sendStatus(200));
  // Match everything except internal og static
  server.get(["/", "/*"], (_req, res) => res.sendFile(`${BUILD_PATH}/index.html`));
  server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
};
(0, azureAd_1.initializeAzureAd)()
  .then(() => startServer())
  .catch((e) => logger_1.logger.error("Kunne ikke starte server", e.message));
