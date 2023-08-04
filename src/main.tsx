import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { initializeFaro } from "@grafana/faro-web-sdk";
import "./main.css";
import { getEnvironment } from "./utils/environment.js";

type GrafanaFaroUrl = "https://telemetry.nav.no/collect" | "https://telemetry.ekstern.dev.nav.no/collect";

function getMetricsUrl(): GrafanaFaroUrl {
  return getEnvironment() === "production"
    ? "https://telemetry.nav.no/collect"
    : "https://telemetry.ekstern.dev.nav.no/collect";
}

initializeFaro({
  url: getMetricsUrl(),
  app: {
    name: "sokos-op-fasade",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
