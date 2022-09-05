const express = require("express");
const logger = require("./logger");
const path = require("path");
const basePath = "/okonomiportalen";
const buildPath = path.resolve(__dirname, "../dist");
const server = express();
const expressStaticGzip = require("express-static-gzip");

server.disable("x-powered-by");

server.use(
  basePath,
  expressStaticGzip(buildPath, {
    index: false,
    enableBrotli: true,
    orderPreference: ["br"],
  })
);

server.get(`${basePath}/internal/isAlive`, async (req, res) => {
  res.sendStatus(200);
});

server.get(`${basePath}/internal/isReady`, async (req, res) => {
  res.sendStatus(200);
});

// Match everything except internal og static
server.use(/^(?!.*\/(internal|static)\/).*$/, (req, res) => res.sendFile(`${buildPath}/index.html`));

server.listen(7100, () => console.log("Server listening on port 7100"));