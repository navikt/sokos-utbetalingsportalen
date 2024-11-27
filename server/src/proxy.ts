import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";
import { getToken, validateAzureToken } from "@navikt/oasis";
import { logger, secureLog } from "./logger";
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
      proxyReq: async (proxyReq, req) => {
        fixRequestBody(proxyReq, req);
        const token = getToken(req);
        if (token) {
          const validation = await validateAzureToken(token);
          if (validation.ok) {
            secureLog.info(
              `${req.method} request to ${toTarget}${req.url} made by:`,
              {
                user: validation.payload.NAVident,
              },
            );
          }
        }
      },
    },
  });
};

type RouteProxyWithOboTokenParams = {
  apiProxy: string;
  apiUrl: string;
  apiAudience: string;
};

export const routeProxyWithOboToken = ({
  apiProxy,
  apiUrl,
  apiAudience,
}: RouteProxyWithOboTokenParams) => {
  server.use(
    apiProxy,
    setOnBehalfOfToken(apiAudience),
    setupRouteProxy(apiProxy, apiUrl),
  );
};
