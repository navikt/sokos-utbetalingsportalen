import { getClientSideEnvironment } from "@utils/client/environments";
import { getServerSideEnvironment } from "./environment";

type TelemetryCollectorURL =
  | "https://telemetry.nav.no/collect"
  | "https://telemetry.ekstern.dev.nav.no/collect"
  | "http://localhost:12347";

export function getTelemetryCollectorURLServer(): TelemetryCollectorURL {
  if (getServerSideEnvironment() === "production") {
    return "https://telemetry.nav.no/collect";
  }

  if (getServerSideEnvironment() === "development") {
    return "https://telemetry.ekstern.dev.nav.no/collect";
  }

  return "http://localhost:12347";
}

export function getTelemetryCollectorURLClient(): TelemetryCollectorURL {
  if (getClientSideEnvironment() === "production") {
    return "https://telemetry.nav.no/collect";
  }

  if (getClientSideEnvironment() === "development") {
    return "https://telemetry.ekstern.dev.nav.no/collect";
  }

  return "http://localhost:12347";
}
