const express = require("express");
const logger = require("./logger");
const path = require("path");
const basePath = "/okonomiportalen";
const buildPath = path.resolve(__dirname, "../dist");
const server = express();

server.disable("x-powered-by");

server.use(basePath, express.static(buildPath, { index: false }));

server.get(`${basePath}/internal/isAlive`, async (req, res) => {
  res.sendStatus(200);
});

server.get(`${basePath}/internal/isReady`, async (req, res) => {
  res.sendStatus(200);
});

// Match everything except internal og static
server.use(/^(?!.*\/(internal|static)\/).*$/, (req, res) => res.send(`${buildPath}/index.html`)));

const port = 7100;
server.listen(port, () => console.info(`Listening on port ${port}`));
