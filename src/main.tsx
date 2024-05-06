import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./main.css";
import { initGrafanaFaro } from "./utils/grafanaFaro";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

if (window.location.hostname !== "localhost") initGrafanaFaro();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
