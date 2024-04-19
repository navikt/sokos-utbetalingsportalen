import microfrontend from "./bundle/microfrontend.js";

export default [
  {
    url: "/microfrontend/bundle.js",
    method: "get",
    rawResponse: async (_req, res) => {
      res.setHeader("Content-Type", "text/javascript");
      res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
      res.statusCode = 200;
      res.end(microfrontend);
    },
  },
];
