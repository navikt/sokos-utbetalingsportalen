import { NextFunction, Request, RequestHandler, Response } from "express";
import { server } from "./server";
import { respondUnauthorizedIfNotLoggedIn, setOnBehalfOfToken } from "./middelwares";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";
import { logger } from "./logger";

export const setupProxy = (fromPath: string, toTarget: string): RequestHandler => {
  console.log("setter opp proxy");
  console.log("toTarget", toTarget);
  console.log("fromPath", fromPath);
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
export const proxyWithOboToken = (
  path: string,
  apiUrl: string,
  apiScope: string,
  customMiddleware?: RequestHandler
) => {
  console.log("path ", path);
  console.log("apiUrl ", apiUrl);
  console.log("apiScope ", apiScope);
  console.log("customMiddleware ", customMiddleware);
  console.log("proxyWithOboToken metoden kjøres");
  server.use(path, respondUnauthorizedIfNotLoggedIn, setOnBehalfOfToken(apiScope), setupProxy(path, apiUrl));
  console.log("proxyWithOboToken ferdig kjørt");
};

export const emptyMiddleware: RequestHandler = (_: Request, __: Response, next: NextFunction) => {
  console.log("emptyMiddleware metoden kjøres");
  next();
};
