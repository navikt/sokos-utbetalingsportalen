import { useEffect } from "react";
import {
  initializeFaro,
  getWebInstrumentations,
  faro,
} from "@grafana/faro-web-sdk";
import {
  getTelemetryCollectorURLClient,
  getTelemetryCollectorURLServer,
} from "src/utils/server/grafanaUrl";
import { getClientSideEnvironment } from "src/utils/client/environments";

const Observability = () => {
  useEffect(() => {
    console.log("Initializing Grafana Faro");
    console.log(
      "Telemetry collector URL CLIENT: ",
      getTelemetryCollectorURLClient(),
    );
    console.log(
      "Telemetry collector URL SERVER: ",
      getTelemetryCollectorURLServer(),
    );
    initializeFaro({
      url: getTelemetryCollectorURLServer(),
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
