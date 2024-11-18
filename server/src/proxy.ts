import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";
import { logger } from "./logger";
import { setOnBehalfOfToken } from "./onBehalfOfToken";
import { server } from "./server";

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

type RouteProxyWithOboTokenParams = {
  apiProxy: string;
  apiUrl: string;
  apiScope: string;
};

export const routeProxyWithOboToken = ({
  apiProxy,
  apiUrl,
  apiScope,
}: RouteProxyWithOboTokenParams) => {
  server.use(
    apiProxy,
    setOnBehalfOfToken(apiScope),
    setupRouteProxy(apiProxy, apiUrl),
  );
};
