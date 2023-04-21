const express = require("express");
const path = require("path");
const basePath = "/okonomiportalen";
const buildPath = path.resolve(__dirname, "../dist");
const server = express();
const expressStaticGzip = require("express-static-gzip");
const RateLimit = require("express-rate-limit");

server.disable("x-powered-by");

server.use(
  basePath,
  expressStaticGzip(buildPath, {
    index: false,
    enableBrotli: true,
    orderPreference: ["br"],
  }),
  RateLimit({
    windowMs: 10 * 1000,
    max: 20,
  })
);

server.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      next(err);
    }
  });
  return res.redirect("/oauth2/logout/local?post_logout_redirect_uri=okonomiportalen.intern.nav.no");
});

server.get(`${basePath}/internal/isAlive`, async (_req, res) => {
  res.sendStatus(200);
});

server.get(`${basePath}/internal/isReady`, async (_req, res) => {
  res.sendStatus(200);
});

// Match everything except internal og static
server.use(/^(?!.*\/(internal|static)\/).*$/, (_req, res) => res.sendFile(`${buildPath}/index.html`));

server.listen(7100, () => console.log("Server listening on port 7100"));
