import { getServerSideEnvironment } from "./environment";

type TelemetryCollectorURL =
  | "https://telemetry.nav.no/collect"
  | "https://telemetry.ekstern.dev.nav.no/collect"
  | "http://localhost:12347";

export function getTelemetryCollectorURL(): TelemetryCollectorURL {
  if (getServerSideEnvironment() === "production") {
    return "https://telemetry.nav.no/collect";
  }

  if (getServerSideEnvironment() === "development") {
    return "https://telemetry.ekstern.dev.nav.no/collect";
  }

  return "http://localhost:12347";
}
