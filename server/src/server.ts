/* eslint-disable */
import express, { Request, Response } from "express";
import RateLimit from "express-rate-limit";
import expressStaticGzip from "express-static-gzip";
import helmet from "helmet";
import path from "path";
import Config from "./config";
import { azureUserInfo, enforceAzureADMiddleware } from "./middelwares";
import { routeProxyWithOboToken } from "./proxy";

export const server = express();

const SERVER_PORT = 8080;
const BASE_PATH = "/utbetalingsportalen";
const BUILD_PATH = path.resolve(__dirname, "../dist");

server.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "https://www.nav.no"],
      "connect-src": [
        "'self'",
        "https://telemetry.ekstern.dev.nav.no",
        "https://telemetry.nav.no/collect",
      ],
    },
  }),
);

const startServer = () => {
  server.use(express.urlencoded({ extended: true }));
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
  server.get(
    [`${BASE_PATH}/internal/isAlive`, `${BASE_PATH}/internal/isReady`],
    (_req: Request, res: Response) => res.sendStatus(200),
  );

  // Enforce Azure AD authentication
  server.use(`*`, enforceAzureADMiddleware);

  // Azure AD user info
  server.get("/userinfo", azureUserInfo);

  if (Config.NAIS_CLUSTER_NAME === "dev-gcp") {
    // sokos-mikrofrontend-api
    routeProxyWithOboToken(
      Config.SOKOS_MIKROFRONTEND_PROXY,
      Config.SOKOS_MIKROFRONTEND_API,
      Config.SOKOS_MIKROFRONTEND_API_SCOPE,
    );

    // sokos-oppdrag
    routeProxyWithOboToken(
      Config.SOKOS_OPPDRAG_PROXY,
      Config.SOKOS_OPPDRAG_API,
      Config.SOKOS_OPPDRAG_API_SCOPE,
    );

    // sokos-ur-iso
    routeProxyWithOboToken(
      Config.SOKOS_UR_ISO_PROXY,
      Config.SOKOS_UR_ISO,
      Config.SOKOS_UR_ISO_SCOPE,
    );
  }

  // sokos-skattekort-person
  routeProxyWithOboToken(
    Config.SOKOS_SKATTEKORT_PROXY,
    Config.SOKOS_SKATTEKORT_PERSON_API,
    Config.SOKOS_SKATTEKORT_PERSON_API_SCOPE,
  );

  // sokos-up-ors-api
  routeProxyWithOboToken(
    Config.SOKOS_UP_ORS_API_PROXY,
    Config.SOKOS_UP_ORS_API,
    Config.SOKOS_UP_ORS_API_SCOPE,
  );

  // sokos-up-kontoregister-api
  routeProxyWithOboToken(
    Config.SOKOS_KONTOREGISTER_API_PROXY,
    Config.SOKOS_KONTOREGISTER_API,
    Config.SOKOS_KONTOREGISTER_API_SCOPE,
  );

  server.use(`/assets`, express.static(`${BUILD_PATH}/assets`));

  server.get(["/", "/*"], (_req: Request, res: Response) =>
    res.sendFile(`${BUILD_PATH}/index.html`),
  );

  server.listen(SERVER_PORT, () =>
    console.log(`Server listening on port ${SERVER_PORT}`),
  );
};

startServer();
