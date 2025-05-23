import { api } from "@opentelemetry/sdk-node";
import { logger } from "@utils/logger";
import { getOboToken } from "@utils/server/token";
import type { APIContext, APIRoute } from "astro";

type ProxyConfig = {
  apiProxy: string;
  apiUrl: string;
  audience: string;
};

function getProxyUrl(request: Request, proxyConfig: ProxyConfig): URL {
  const requestUrl = new URL(request.url);
  const hostname = requestUrl.hostname;

  const url = request.url.replace(
    `https://${hostname}${proxyConfig.apiProxy}`,
    proxyConfig.apiUrl,
  );
  return new URL(url);
}

export const routeProxyWithOboToken = (proxyConfig: ProxyConfig): APIRoute => {
  return async (context: APIContext) => {
    const tracer = api.trace.getTracer("proxy");

    return tracer.startActiveSpan("proxyRequest", async (span) => {
      try {
        const audience = proxyConfig.audience;
        const token = await getOboToken(context.locals.token, audience);
        const url = getProxyUrl(context.request, proxyConfig);

        logger.info(
          {
            method: context.request.method,
            url: context.request.url,
            proxyFrom: proxyConfig.apiProxy,
            proxyTo: proxyConfig.apiUrl,
          },
          "Proxy HTTP request",
        );

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

        if (!response.ok) {
          logger.error(
            {
              url: response.url,
              status: response.status,
              statusText: response.statusText,
            },
            "Proxy HTTP error",
          );

          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
          });
        }

        logger.info(
          {
            url: response.url,
            status: response.status,
          },
          "Proxy HTTP response",
        );

        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        });
      } finally {
        span.end();
      }
    });
  };
};
