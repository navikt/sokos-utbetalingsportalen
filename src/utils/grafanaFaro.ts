import { getEnvironment } from "./environment";
import { initializeFaro } from "@grafana/faro-web-sdk";

type GrafanaFaroUrl = "https://telemetry.nav.no/collect" | "https://telemetry.ekstern.dev.nav.no/collect";

function getMetricsUrl(): GrafanaFaroUrl {
  return getEnvironment() === "production"
    ? "https://telemetry.nav.no/collect"
    : "https://telemetry.ekstern.dev.nav.no/collect";
}

export function initGrafanaFaro() {
  getMetricsUrl();
  initializeFaro({
    url: getMetricsUrl(),
    app: {
      name: "sokos-op-fasade",
    },
  });
}
