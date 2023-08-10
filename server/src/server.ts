import express, { Request, Response } from "express";
import path from "path";
import expressStaticGzip from "express-static-gzip";
import RateLimit from "express-rate-limit";
import { routeProxyWithOboToken } from "./proxy";
import Config from "./config";
import helmet from "helmet";
import { azureUserInfo, enforceAzureADMiddleware } from "./middelwares";

export const server = express();

const SERVER_PORT = 8080;
const BASE_PATH = "/okonomiportalen";
const BUILD_PATH = path.resolve(__dirname, "../dist");
server.use(helmet());

const startServer = () => {
  server.use(express.json());

  server.use(
    BASE_PATH,
    expressStaticGzip(BUILD_PATH, {
      index: false,
      enableBrotli: true,
      orderPreference: ["br"],
    }),
    RateLimit({
      windowMs: 60 * 1000, // 1 minute
      max: 100,
    }),
  );

  // Health checks
  server.get([`${BASE_PATH}/internal/isAlive`, `${BASE_PATH}/internal/isReady`], (_req: Request, res: Response) =>
    res.sendStatus(200),
  );

  // Enforce Azure AD authentication
  server.use(`*`, enforceAzureADMiddleware);

  // Azure AD user info
  server.get("/internal/userinfo", azureUserInfo);

  // sokos-mikrofrontend-template
  routeProxyWithOboToken(
    Config.SOKOS_MIKROFRONTEND_PROXY,
    Config.SOKOS_MIKROFRONTEND_API,
    Config.SOKOS_MIKROFRONTEND_API_SCOPE,
  );

  // sokos-op-skattekort
  routeProxyWithOboToken(
    Config.SOKOS_SKATTEKORT_PROXY,
    Config.SOKOS_SKATTEKORT_PERSON_API,
    Config.SOKOS_SKATTEKORT_PERSON_API_SCOPE,
  );

  // utbetalinger-frontend-poc
  routeProxyWithOboToken(Config.SOKOS_POSTERING_PROXY, Config.SOKOS_POSTERING_API, Config.SOKOS_POSTERING_API_SCOPE);

  server.use(`/assets`, express.static(`${BUILD_PATH}/assets`));

  server.get(["/", "/*"], (_req: Request, res: Response) => res.sendFile(`${BUILD_PATH}/index.html`));

  server.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));
};

startServer();
