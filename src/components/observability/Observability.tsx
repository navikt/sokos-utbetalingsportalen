import { getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";
import { getTelemetryCollectorUR } from "@utils/grafanaFaro";
import { useEffect } from "react";

const FNR_PATTERN = /\d{11}/;

interface ObservabilityProps {
	version: string;
}

const Observability = ({ version }: ObservabilityProps) => {
	useEffect(() => {
		initializeFaro({
			url: getTelemetryCollectorUR(),
			app: {
				name: "sokos-utbetalingsportalen",
				namespace: "okonomi",
				version,
			},
			beforeSend: (item) => {
				if (item.meta?.page?.url) {
					try {
						const url = new URL(item.meta.page.url);
						url.search = "";
						item.meta.page.url = url.toString();
					} catch {
						/* ignore malformed URLs */
					}
				}
				if (FNR_PATTERN.test(JSON.stringify(item))) {
					return null;
				}
				return item;
			},
			instrumentations: [
				...getWebInstrumentations({
					captureConsole: false,
				}),
				new TracingInstrumentation({
					instrumentationOptions: {
						propagateTraceHeaderCorsUrls: [
							/https:\/\/[^/]+\.nav\.no\/.*/,
							/https:\/\/[^/]+\.nais\.io\/.*/,
						],
					},
				}),
			],
		});
	}, [version]);
};

export default Observability;
