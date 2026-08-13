import { api } from "@opentelemetry/sdk-node";
import { extractServiceNameFromAudience } from "@utils/audience";
import { logger, teamLogger } from "@utils/logger/index";
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

export function routeProxyWithOboToken(proxyConfig: ProxyConfig): APIRoute {
	return async (context: APIContext) => {
		const tracer = api.trace.getTracer("Reverse-Proxy");
		const audienceService = extractServiceNameFromAudience(
			proxyConfig.audience,
		);

		const incomingCarrier: Record<string, string> = {};
		context.request.headers.forEach((value, key) => {
			incomingCarrier[key] = value;
		});
		const parentCtx = api.propagation.extract(
			api.context.active(),
			incomingCarrier,
		);

		return tracer.startActiveSpan(
			`Reverse-Proxy[${audienceService}]`,
			{},
			parentCtx,
			async (span) => {
				try {
					const audience = proxyConfig.audience;
					const oboToken = await getOboToken(context.locals.token, audience);
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
						`Proxy Request -> Method: ${context.request.method} | URL: ${url.href}`,
					);

					const acceptHeader = context.request.headers.get("accept");
					const contentTypeHeader = context.request.headers.get("content-type");

					const outgoingHeaders: Record<string, string> = {
						Authorization: `Bearer ${oboToken}`,
						...(acceptHeader && { Accept: acceptHeader }),
						...(contentTypeHeader && { "Content-Type": contentTypeHeader }),
					};
					api.propagation.inject(api.context.active(), outgoingHeaders);

					const response = await fetch(url.href, {
						method: context.request.method,
						headers: outgoingHeaders,
						body: context.request.body,
						// @ts-expect-error
						duplex: "half",
					});

					logger.info(
						{
							url: response.url,
							status: response.status,
							trace_id: spanContext.traceId,
							span_id: spanContext.spanId,
							trace_flags: spanContext.traceFlags.toString(16).padStart(2, "0"),
						},
						`Proxy Response -> Status:  ${response.status} | URL: ${response.url}`,
					);

					teamLogger.info(
						{
							NAVident: context.locals.userData?.NAVident,
							method: context.request.method,
							url: response.url,
							status: response.status,
							trace_id: spanContext.traceId,
							span_id: spanContext.spanId,
						},
						`Proxy Audit -> Ident: ${context.locals.userData?.NAVident} | Method: ${context.request.method} | URL: ${response.url}`,
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
}
