import type { APIContext, APIRoute } from "astro";
import { getOboToken } from "@utils/server/token";
import { logger } from "@utils/logger";
import { v4 as uuidv4 } from "uuid";

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
    const audience = proxyConfig.audience;
    const token = await getOboToken(context.locals.token, audience);
    const url = getProxyUrl(context.request, proxyConfig);

    let xCorrelationId = context.request.headers.get("x-correlation-id");
    xCorrelationId = xCorrelationId?.trim() || uuidv4();

    logger.info(
      {
        method: context.request.method,
        url: context.request.url,
        proxyFrom: proxyConfig.apiProxy,
        proxyTo: proxyConfig.apiUrl,
        "X-Correlation-ID": xCorrelationId,
      },
      "Proxy HTTP request",
    );

    const response = await fetch(url.href, {
      method: context.request.method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "X-Correlation-ID": xCorrelationId,
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
          "X-Correlation-ID": response.headers.get("X-Correlation-ID") || "",
        },
        "Proxy HTTP error",
      );
      return new Response(null, { status: response.status });
    }

    logger.info(
      {
        url: response.url,
        status: response.status,
        "X-Correlation-ID": response.headers.get("X-Correlation-ID") || "",
      },
      "Proxy HTTP response",
    );

    return new Response(response.body);
  };
};
