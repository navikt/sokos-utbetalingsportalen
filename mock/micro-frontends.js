import sokosmikrofrontendtemplate from "./bundle/sokos-mikrofrontend-template";
import utbetalingfrontendpoc from "./bundle/utbetaling-frontend-poc";

export default [
  {
    url: "/sokos-mikrofrontend-template/bundle.js",
    method: "get",
    rawResponse: async (_req, res) => {
      res.setHeader("Content-Type", "text/javascript");
      res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
      res.statusCode = 200;
      res.end(sokosmikrofrontendtemplate);
    },
  },
  {
    url: "/utbetaling-frontend-poc/bundle.js",
    method: "get",
    rawResponse: async (_req, res) => {
      res.setHeader("Content-Type", "text/javascript");
      res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
      res.statusCode = 200;
      res.end(utbetalingfrontendpoc);
    },
  },
];
