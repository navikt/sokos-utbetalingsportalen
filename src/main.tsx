import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./main.css";
import Authentication from "./components/authentication/Authentication";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Authentication>
      <App />
    </Authentication>
  </React.StrictMode>
);
