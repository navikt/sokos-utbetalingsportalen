import { server } from "./server";
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
) => {
  server.use(path, setOnBehalfOfToken(apiScope), setupRouteProxy(path, apiUrl));
};
