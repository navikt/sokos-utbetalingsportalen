import * as Sentry from "@sentry/react";
import ReactDOM from "react-dom/client";
import { BrowserTracing } from "@sentry/tracing";
import React from "react";
import { QueryClientProvider } from "react-query";
import { getEnvironment } from "./api/environment";
import { queryClient } from "./api/query";
import App from "./App";
import Authentication from "./components/authentication/Authentication";
import "./main.css";

if (getEnvironment() === "development") {
  Sentry.init({
    dsn: "https://28a8206a1e7e4fa8b51b90445d099594@sentry.gc.nav.no/141",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 0.1,
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/*      <Authentication>
        <App />
      </Authentication>*/}
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
