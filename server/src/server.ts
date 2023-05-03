import express, { Express, Request, Response } from "express";
import path from "path";
import expressStaticGzip from "express-static-gzip";
import RateLimit from "express-rate-limit";
import { initializeAzureAd } from "./azureAd";
import { logger } from "./logger";
import { fetchUserId, redirectIfUnauthorized, respondUnauthorizedIfNotLoggedIn } from "./middelwares";
import { proxyWithOboToken } from "./proxy";
import Configuration from "./config";

export const server: Express = express();

const BUILD_PATH = path.resolve(__dirname, "../dist");

const scopes = {
  mikrofrontendApi: `api://${Configuration.NAIS_CLUSTER_NAME}.okonomi.sokos-mikrofrontend-api/.default`,
};

const startServer = () => {
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  server.disable("x-powered-by");

  server.use(
    Configuration.SERVER_BASE_PATH,
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

  server.get(
    [`${Configuration.SERVER_BASE_PATH}/internal/isAlive`, `${Configuration.SERVER_BASE_PATH}/internal/isReady`],
    (_req: Request, res: Response) => res.sendStatus(200)
  );

  server.get("/brukerident", respondUnauthorizedIfNotLoggedIn, fetchUserId);

  proxyWithOboToken("/mikrofrontend-api", Configuration.SOKOS_MIKROFRONTEND_API_URL, scopes.mikrofrontendApi);

  server.use(`/assets`, express.static(`${BUILD_PATH}/assets`));

  server.get(["/", "/*"], redirectIfUnauthorized, (_req: Request, res: Response) =>
    res.sendFile(`${BUILD_PATH}/index.html`)
  );

  server.listen(Configuration.SERVER_PORT, () => console.log(`Server listening on port ${Configuration.SERVER_PORT}`));
};

initializeAzureAd()
  .then(() => startServer())
  .catch((e) => logger.error("Kunne ikke starte server", e.message));
