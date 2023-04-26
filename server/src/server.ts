import express, { Express, Request, Response } from "express";
import path from "path";
import expressStaticGzip from "express-static-gzip";
import RateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { hentBrukerIdent, initializeAzureAd } from "./azureAd";
import { logger } from "./logger";

dotenv.config();

const BASE_PATH = "/okonomiportalen";
const BUILD_PATH = path.resolve(__dirname, "../dist");
const PORT = process.env.PORT;
const server: Express = express();

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

  server.get("/brukerident", hentBrukerIdent);

  server.get(`${BASE_PATH}/internal/isAlive`, async (_req: Request, res: Response) => {
    res.sendStatus(200);
  });

  server.get(`${BASE_PATH}/internal/isReady`, async (_req: Request, res: Response) => {
    res.sendStatus(200);
  });

  // Match everything except internal og static
  server.use(/^(?!.*\/(internal|static)\/).*$/, (_req: Request, res: Response) =>
    res.sendFile(`${BUILD_PATH}/index.html`)
  );

  server.listen(PORT, () => console.log(`Server listening on port $PORT`));
};

initializeAzureAd()
  .then(() => startServer())
  .catch((e) => logger.error("Kunne ikke starte server", e.message));
