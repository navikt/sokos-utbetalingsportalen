import { NextFunction, Request, RequestHandler, Response } from "express";
import { server } from "./server";
import { respondUnauthorizedIfNotLoggedIn, setOnBehalfOfToken } from "./middelwares";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";
import { logger } from "./logger";

export const setupProxy = (fromPath: string, toTarget: string): RequestHandler =>
  createProxyMiddleware(
    {
      target: toTarget,
      changeOrigin: true,
      secure: true,
      pathRewrite: (path) => path.replace(fromPath, ""),
      // Fikser proxien ved bruk sammen med express.json()-middleware i server.ts
      onProxyReq: fixRequestBody,
    },
    {
      logProvider: () => logger,
    }
  );
export const proxyWithOboToken = (
  path: string,
  apiUrl: string,
  apiScope: string,
  customMiddleware?: RequestHandler
) => {
  server.use(
    path,
    respondUnauthorizedIfNotLoggedIn,
    customMiddleware ? customMiddleware : emptyMiddleware,
    setOnBehalfOfToken(apiScope),
    setupProxy(path, apiUrl)
  );
};

export const emptyMiddleware: RequestHandler = (_: Request, __: Response, next: NextFunction) => {
  next();
};
