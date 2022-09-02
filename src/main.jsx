import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider } from "react-query";
import { getEnvironment } from "./api/environment";
import { queryClient } from "./api/query";
import App from "./App";
import Authentication from "./components/authentication/Authentication";
import "./main.css";

if (getEnvironment() === "development") {
  Sentry.init({
    dsn: "https://3f04bb1c29d111ed88a70242ac16001a@sentry.gc.nav.no/129",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 0.1,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/*      <Authentication>
        <App />
      </Authentication>*/}
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
