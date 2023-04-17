import * as Sentry from "@sentry/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { getEnvironment } from "./api/environment";
import App from "./App.js";
import "./main.css";
import Authentication from "./components/authentication/Authentication";

if (getEnvironment() === "development") {
  Sentry.init({
    dsn: "https://22607cbddbde496281d3954c8340e6cb@sentry.gc.nav.no/160",
    integrations: [new Sentry.BrowserTracing()],
    tracesSampleRate: 0.1,
  });
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Authentication>
      <App />
    </Authentication>
  </React.StrictMode>
);
