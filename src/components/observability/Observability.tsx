import {
  faro,
  getWebInstrumentations,
  initializeFaro,
} from "@grafana/faro-web-sdk";
import { useEffect } from "react";
import { getClientSideEnvironment } from "@utils/client/environments";
import { getTelemetryCollectorUR } from "@utils/grafanaFaro";

const Observability = () => {
  useEffect(() => {
    console.log("Grafana Faro initialized");
    console.log("Telemetry collector URL CLIENT: ", getTelemetryCollectorUR());
    initializeFaro({
      url: getTelemetryCollectorUR(),
      app: {
        name: "sokos-utbetalingsportalen",
      },

      instrumentations: [
        ...getWebInstrumentations({
          captureConsole: false,
        }),
      ],
    });
  }, []);
};

export function logFaroError(error: Error) {
  if (getClientSideEnvironment() != "local") {
    faro.api.pushError(error);
  }
}

export default Observability;
