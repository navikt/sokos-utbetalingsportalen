import express, { Request, Response } from "express";
import RateLimit from "express-rate-limit";
import expressStaticGzip from "express-static-gzip";
import helmet from "helmet";
import path from "path";
import Config from "./config";
import { azureUserInfo, enforceAzureADMiddleware } from "./middlewares";
import { routeProxyWithOboToken } from "./proxy";

export const server = express();

const SERVER_PORT = 8080;
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
  server.get("/internal/isAlive", (_req: Request, res: Response) => {
    res.sendStatus(200);
  });

  server.get("/internal/isReady", (_req: Request, res: Response) => {
    res.sendStatus(200);
  });

  // Enforce Azure AD authentication
  server.use(`*`, enforceAzureADMiddleware);

  // Azure AD user info
  server.get("/userinfo", azureUserInfo);

  if (Config.NAIS_CLUSTER_NAME === "dev-gcp") {
    // sokos-oppdrag
    routeProxyWithOboToken({
      path: Config.SOKOS_OPPDRAG_PROXY,
      apiUrl: Config.SOKOS_OPPDRAG_API,
      apiScope: Config.SOKOS_OPPDRAG_API_SCOPE,
    });

    // sokos-utbetaling-api
    routeProxyWithOboToken({
      path: Config.SOKOS_UTBETALING_API_PROXY,
      apiUrl: Config.SOKOS_UTBETALING_API,
      apiScope: Config.SOKOS_UTBETALING_API_SCOPE,
    });

    // sokos-spk-mottak
    routeProxyWithOboToken({
      path: Config.SOKOS_SPK_MOTTAK_PROXY,
      apiUrl: Config.SOKOS_SPK_MOTTAK_API,
      apiScope: Config.SOKOS_SPK_MOTTAK_API_SCOPE,
    });
  }
  // sokos-skattekort-person
  routeProxyWithOboToken({
    path: Config.SOKOS_SKATTEKORT_PROXY,
    apiUrl: Config.SOKOS_SKATTEKORT_PERSON_API,
    apiScope: Config.SOKOS_SKATTEKORT_PERSON_API_SCOPE,
  });

  // sokos-up-ors-api
  routeProxyWithOboToken({
    path: Config.SOKOS_UP_ORS_API_PROXY,
    apiUrl: Config.SOKOS_UP_ORS_API,
    apiScope: Config.SOKOS_UP_ORS_API_SCOPE,
  });

  // sokos-up-kontoregister-api
  routeProxyWithOboToken({
    path: Config.SOKOS_KONTOREGISTER_API_PROXY,
    apiUrl: Config.SOKOS_KONTOREGISTER_API,
    apiScope: Config.SOKOS_KONTOREGISTER_API_SCOPE,
  });

  // sokos-ur-iso
  routeProxyWithOboToken({
    path: Config.SOKOS_UR_ISO_PROXY,
    apiUrl: Config.SOKOS_UR_ISO,
    apiScope: Config.SOKOS_UR_ISO_SCOPE,
  });

  server.use(`/assets`, express.static(`${BUILD_PATH}/assets`));

  server.get(["/", "/*"], (_req: Request, res: Response) =>
    res.sendFile(`${BUILD_PATH}/index.html`),
  );

  server.listen(SERVER_PORT, () =>
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${SERVER_PORT}`),
  );
};

startServer();
