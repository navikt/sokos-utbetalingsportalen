import attestasjon from "./bundle/attestasjon";

export default [
  {
    url: "/sokos-attestasjon-frontend/bundle.js",
    method: "get",
    rawResponse: async (req, res) => {
      res.setHeader("Content-Type", "text/javascript");
      res.statusCode = 200;
      res.end(attestasjon);
    },
  },
];
