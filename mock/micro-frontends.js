import mikrofrontend from "./bundle/mikrofrontend";
import attestasjon from "./bundle/attestasjon";
import postering from "./bundle/postering";

export default [
  {
    url: "/mikrofrontend/bundle.js",
    method: "get",
    rawResponse: async (_req, res) => {
      res.setHeader("Content-Type", "text/javascript");
      res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
      res.statusCode = 200;
      res.end(mikrofrontend);
    },
  },
  {
    url: "/attestasjon/bundle.js",
    method: "get",
    rawResponse: async (_req, res) => {
      res.setHeader("Content-Type", "text/javascript");
      res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
      res.statusCode = 200;
      res.end(attestasjon);
    },
  },
  {
    url: "/postering/bundle.js",
    method: "get",
    rawResponse: async (_req, res) => {
      res.setHeader("Content-Type", "text/javascript");
      res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
      res.statusCode = 200;
      res.end(postering);
    },
  },
];
