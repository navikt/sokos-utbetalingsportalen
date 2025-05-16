import type { APIContext, APIRoute } from "astro";
import { getOboToken } from "src/utils/server/token";
import { logger } from "../logger";
import pinoHttp from "pino-http";

const httpLogger = pinoHttp({ logger });

type ProxyConfig = {
  apiProxy: string;
  apiUrl: string;
  audience: string;
};

function getProxyUrl(request: Request, proxyConfig: ProxyConfig): URL {
  const url = request.url.replace(
    `https://${process.env.UTBETALINGSPORTALEN_URL}${proxyConfig.apiProxy}`,
    proxyConfig.apiUrl,
  );
  return new URL(url);
}

export const routeProxyWithOboToken = (proxyConfig: ProxyConfig): APIRoute => {
  return async (context: APIContext) => {
    // Log incoming request
    httpLogger(context.request as any, {} as any);

    const audience = proxyConfig.audience;
    const token = await getOboToken(context.locals.token, audience);
    const url = getProxyUrl(context.request, proxyConfig);

    const response = await fetch(url.href, {
      method: context.request.method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: context.request.body,
      // @ts-expect-error
      duplex: "half",
    });

    // Log outgoing response
    httpLogger.logger.info(
      {
        status: response.status,
        statusText: response.statusText,
        url: url.href,
        proxyFrom: proxyConfig.apiProxy,
        proxyTo: proxyConfig.apiUrl,
      },
      "Proxy HTTP response",
    );

    return new Response(response.body);
  };
};
