import type { APIContext, APIRoute } from "astro";
import { getOboToken } from "src/utils/server/token";

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
  console.log(`Proxying request from ${proxyConfig.apiProxy} to ${url}`);
  return new URL(url);
}

export const routeProxyWithOboToken = (proxyConfig: ProxyConfig): APIRoute => {
  return async (context: APIContext) => {
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

    return new Response(response.body);
  };
};
