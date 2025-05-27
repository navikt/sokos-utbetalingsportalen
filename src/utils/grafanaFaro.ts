import { getClientSideEnvironment } from "@utils/client/environments";

type TelemetryCollectorURL =
  | "https://telemetry.nav.no/collect"
  | "https://telemetry.ekstern.dev.nav.no/collect"
  | "http://localhost:12347";

export function getTelemetryCollectorUR(): TelemetryCollectorURL {
  if (getClientSideEnvironment() === "production") {
    return "https://telemetry.nav.no/collect";
  }

  if (getClientSideEnvironment() === "development") {
    return "https://telemetry.ekstern.dev.nav.no/collect";
  }

  return "http://localhost:12347";
}
