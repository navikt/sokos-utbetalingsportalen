import { api } from "@opentelemetry/sdk-node";
import { extractAudienceService } from "@utils/audience";
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
    const tracer = api.trace.getTracer("Reverse-Proxy");
    const audienceService = extractAudienceService(proxyConfig.audience);

    return tracer.startActiveSpan(
      `Reverse-Proxy[${audienceService}]`,
      async (span) => {
        try {
          const audience = proxyConfig.audience;
          const token = await getOboToken(context.locals.token, audience);
          const url = getProxyUrl(context.request, proxyConfig);

          const spanContext = span.spanContext();

          logger.info(
            {
              method: context.request.method,
              url: context.request.url,
              proxyFrom: proxyConfig.apiProxy,
              proxyTo: proxyConfig.apiUrl,
              trace_id: spanContext.traceId,
              span_id: spanContext.spanId,
              trace_flags: spanContext.traceFlags.toString(16).padStart(2, "0"),
            },
            "Reverse Proxy HTTP Request",
          );

          const xHeaders = Object.fromEntries(
            context.request.headers
              .entries()
              .filter(([key, _]) => key.toLowerCase().startsWith("x-")),
          );

          const response = await fetch(url.href, {
            method: context.request.method,
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              ...xHeaders,
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
                trace_id: spanContext.traceId,
                span_id: spanContext.spanId,
                trace_flags: spanContext.traceFlags
                  .toString(16)
                  .padStart(2, "0"),
              },
              "Reverse Proxy HTTP Error",
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
              trace_id: spanContext.traceId,
              span_id: spanContext.spanId,
              trace_flags: spanContext.traceFlags.toString(16).padStart(2, "0"),
            },
            "Reverse Proxy HTTP Response",
          );

          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
          });
        } finally {
          span.end();
        }
      },
    );
  };
};
