import express, { Express, Request, Response } from "express";
import path from "path";
import expressStaticGzip from "express-static-gzip";
import RateLimit from "express-rate-limit";
import { initializeAzureAd } from "./azureAd";
import { logger } from "./logger";
import { fetchUserId, redirectIfUnauthorized, respondUnauthorizedIfNotLoggedIn } from "./middelwares";
import { proxyWithOboToken } from "./proxy";

export const server: Express = express();

const BASE_PATH = "/okonomiportalen";
const BUILD_PATH = path.resolve(__dirname, "../dist");
const PORT = process.env.APP_PORT || 8080;
const CLUSTER = process.env.NAIS_CLUSTER_NAME || "";

const scopes = {
  mikrofrontendApi: `api://${CLUSTER}.okonomi.sokos-mikrofrontend-api/.default`,
};

const sokosMikrofrontendApi = process.env.SOKOS_MIKROFRONTEND_API_REST_URL || "";

const startServer = () => {
  server.use(express.urlencoded());
  server.use(express.json());
  server.disable("x-powered-by");

  server.use(
    BASE_PATH,
    expressStaticGzip(BUILD_PATH, {
      index: false,
      enableBrotli: true,
      orderPreference: ["br"],
    }),
    RateLimit({
      windowMs: 10 * 1000,
      max: 20,
    })
  );

  proxyWithOboToken("/api", sokosMikrofrontendApi, scopes.mikrofrontendApi);

  server.use(`/assets`, express.static(`${BUILD_PATH}/assets`));

  server.get("/brukerident", respondUnauthorizedIfNotLoggedIn, fetchUserId);

  server.get([`${BASE_PATH}/internal/isAlive`, `${BASE_PATH}/internal/isReady`], (_req: Request, res: Response) =>
    res.sendStatus(200)
  );

  server.get(["/", "/*"], redirectIfUnauthorized, (_req: Request, res: Response) =>
    res.sendFile(`${BUILD_PATH}/index.html`)
  );

  server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
};

initializeAzureAd()
  .then(() => startServer())
  .catch((e) => logger.error("Kunne ikke starte server", e.message));
