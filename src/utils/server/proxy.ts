import { api } from "@opentelemetry/sdk-node";
import type { Team } from "@config/team";
import { extractServiceNameFromAudience } from "@utils/audience";
import { logger, teamLogger } from "@utils/logger/index";
import { recordProxyRequest } from "@utils/observability/proxyMetrics";
import { getOboToken } from "@utils/server/token";
import type { APIContext, APIRoute } from "astro";

type ProxyConfig = {
	apiProxy: string;
	apiUrl: string;
	audience: string;
	team: Team;
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
				span.setAttribute("proxy.audience_service", audienceService);
				span.setAttribute("proxy.team", proxyConfig.team);
				const startedAt = performance.now();
				let requestStage: "token_exchange" | "backend_request" =
					"token_exchange";
				try {
					const audience = proxyConfig.audience;
					const oboToken = await getOboToken(context.locals.token, audience);
					const url = getProxyUrl(context.request, proxyConfig);
					const route = new URL(context.request.url).pathname;

					const spanContext = span.spanContext();

					logger.info(
						{
							backend: audienceService,
							method: context.request.method,
							route,
							team: proxyConfig.team,
							trace_id: spanContext.traceId,
							span_id: spanContext.spanId,
							trace_flags: spanContext.traceFlags.toString(16).padStart(2, "0"),
						},
						"Proxy request",
					);

					const acceptHeader = context.request.headers.get("accept");
					const contentTypeHeader = context.request.headers.get("content-type");

					const outgoingHeaders: Record<string, string> = {
						Authorization: `Bearer ${oboToken}`,
						...(acceptHeader && { Accept: acceptHeader }),
						...(contentTypeHeader && { "Content-Type": contentTypeHeader }),
					};
					api.propagation.inject(api.context.active(), outgoingHeaders);

					requestStage = "backend_request";
					const response = await fetch(url.href, {
						method: context.request.method,
						headers: outgoingHeaders,
						body: context.request.body,
						// @ts-expect-error
						duplex: "half",
					});

					const isServerError = response.status >= 500;

					if (isServerError) {
						span.setStatus({
							code: api.SpanStatusCode.ERROR,
							message: `Proxy received status ${response.status}`,
						});
					}

					const statusClass = `${Math.floor(response.status / 100)}xx`;
					recordProxyRequest(
						{
							backend: audienceService,
							method: context.request.method,
							status_class: statusClass,
							error_type: "none",
						},
						(performance.now() - startedAt) / 1000,
					);
					const responseLogFields = {
						backend: audienceService,
						route,
						status: response.status,
						status_class: statusClass,
						team: proxyConfig.team,
						trace_id: spanContext.traceId,
						span_id: spanContext.spanId,
						trace_flags: spanContext.traceFlags.toString(16).padStart(2, "0"),
					};

					if (isServerError) {
						logger.error(responseLogFields, "Proxy response failed");
					} else {
						logger.info(responseLogFields, "Proxy response");
					}

					teamLogger.info(
						{
							NAVident: context.locals.userData?.NAVident,
							backend: audienceService,
							method: context.request.method,
							route,
							status: response.status,
							status_class: statusClass,
							team: proxyConfig.team,
							trace_id: spanContext.traceId,
							span_id: spanContext.spanId,
						},
						"Proxy audit",
					);

					return new Response(response.body, {
						status: response.status,
						statusText: response.statusText,
						headers: response.headers,
					});
				} catch (error) {
					recordProxyRequest(
						{
							backend: audienceService,
							method: context.request.method,
							status_class: "none",
							error_type: requestStage,
						},
						(performance.now() - startedAt) / 1000,
					);
					throw error;
				} finally {
					span.end();
				}
			},
		);
	};
}
