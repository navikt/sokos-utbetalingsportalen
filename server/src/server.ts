/* eslint-disable no-console */
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

  // Proxy routes
  Config.apiConfig.forEach((app) => {
    if (Config.NAIS_CLUSTER_NAME === "dev-gcp") {
      routeProxyWithOboToken({
        apiUrl: app.apiUrl,
        apiScope: app.apiScope,
        apiProxy: app.apiProxy,
      });
    } else {
      console.log(
        "Production cluster, proxying with OBO token:" + app.production,
      );
      console.log("API URL: " + app.apiUrl);
      console.log("API Scope: " + app.apiScope);
      console.log("API Proxy: " + app.apiProxy);
      if (app.production) {
        routeProxyWithOboToken({
          apiUrl: app.apiUrl,
          apiScope: app.apiScope,
          apiProxy: app.apiProxy,
        });
      }
    }
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
