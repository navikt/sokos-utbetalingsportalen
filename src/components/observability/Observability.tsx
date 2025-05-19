import { useEffect } from "react";
import {
  initializeFaro,
  getWebInstrumentations,
  faro,
} from "@grafana/faro-web-sdk";
import { getTelemetryCollectorURL } from "src/utils/server/grafanaUrl";
import { getClientSideEnvironment } from "src/utils/client/environments";
import { logger } from "@utils/logger";

const Observability = () => {
  useEffect(() => {
    logger.info("Initializing Grafana Faro");
    logger.info("Telemetry collector URL: ", getTelemetryCollectorURL());
    initializeFaro({
      url: getTelemetryCollectorURL(),
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
