import { Counter, Histogram } from "@prometheus-io/client";

const labelNames = [
	"backend",
	"method",
	"status_class",
	"error_type",
] as const;

const proxyRequests = new Counter({
	name: "utbetalingsportalen_proxy_requests_total",
	help: "Antall HTTP-kall gjennom Utbetalingsportalens proxy",
	labelNames,
});

const proxyRequestDuration = new Histogram({
	name: "utbetalingsportalen_proxy_request_duration_seconds",
	help: "Varighet for HTTP-kall gjennom Utbetalingsportalens proxy",
	labelNames,
	buckets: [0.05, 0.1, 0.25, 0.5, 1, 2, 5, 10, 30],
});

type ProxyMetricLabels = {
	backend: string;
	method: string;
	status_class: string;
	error_type: "none" | "token_exchange" | "backend_request";
};

export function recordProxyRequest(
	labels: ProxyMetricLabels,
	durationSeconds: number,
) {
	proxyRequests.inc(labels);
	proxyRequestDuration.observe(labels, durationSeconds);
}
