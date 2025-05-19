import { getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { getTelemetryCollectorUR } from "@utils/grafanaFaro";
import { useEffect } from "react";

const Observability = () => {
  useEffect(() => {
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

export default Observability;
