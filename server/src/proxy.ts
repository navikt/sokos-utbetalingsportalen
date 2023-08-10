import { NextFunction, Request, RequestHandler, Response } from "express";
import { server } from "./server";
import { enforceAzureADMiddleware } from "./middelwares";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";
import { logger } from "./logger";
import { setOnBehalfOfToken } from "./onBehalfOfToken";

export const setupRouteProxy = (fromPath: string, toTarget: string) => {
  return createProxyMiddleware({
    target: toTarget,
    changeOrigin: true,
    secure: true,
    pathRewrite: (path) => path.replace(fromPath, ""),
    logger,
    on: {
      proxyReq: fixRequestBody,
    },
  });
};

export const routeProxyWithOboToken = (
  path: string,
  apiUrl: string,
  apiScope: string,
  customMiddleware?: RequestHandler,
) => {
  server.use(
    path,
    // enforceAzureADMiddleware,
    customMiddleware ? customMiddleware : emptyMiddleware,
    setOnBehalfOfToken(apiScope),
    setupRouteProxy(path, apiUrl),
  );
};

export const emptyMiddleware: RequestHandler = (_: Request, __: Response, next: NextFunction) => {
  next();
};
