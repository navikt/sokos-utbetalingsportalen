const express = require("express");
const path = require("path");
const basePath = "/okonomiportalen";
const buildPath = path.resolve(__dirname, "../dist");
const server = express();
const expressStaticGzip = require("express-static-gzip");
const RateLimit = require("express-rate-limit");
const jose = require("jose");
const oidc = require("openid-client");

/* fra https://github.com/navikt/dp-auth/blob/main/lib/providers/idporten.ts */
let _issuer;
let _remoteJWKSet;

async function jwks() {
  if (typeof _remoteJWKSet === "undefined") {
    console.log("Attempting to create remote JWKS");
    const iss = await issuer();
    _remoteJWKSet = jose.createRemoteJWKSet(new URL(iss.metadata.jwks_uri));
  }

  console.log("_remoteJWKSet::::::::::: ", _remoteJWKSet);

  return _remoteJWKSet;
}

async function issuer() {
  const { AZURE_APP_WELL_KNOWN_URL } = process.env;
  if (typeof _issuer === "undefined") {
    console.log(`Attempting issuer discovery at: ${AZURE_APP_WELL_KNOWN_URL}`);
    if (!AZURE_APP_WELL_KNOWN_URL) throw new Error("Miljøvariabelen AZURE_APP_WELL_KNOWN_URL må være satt!");
    _issuer = await oidc.Issuer.discover(AZURE_APP_WELL_KNOWN_URL);
  }

  console.log("_isser:::::::: ", _issuer);

  return _issuer;
}

async function validerToken(token) {
  return jose.jwtVerify(token, await jwks(), {
    issuer: (await issuer()).metadata.issuer,
    audience: process.env.AZURE_APP_CLIENT_ID,
  });
}

server.use(express.urlencoded());
server.use(express.json());
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

server.get(`${basePath}/brukerident`, async (_req, _res) => {
  const token = _req.headers.authorization?.split(" ")[1];
  console.log("token :::::::: ", token);
  const {
    payload: { name, NAVident },
  } = await validerToken(token);

  console.log(`Lastet sokos-op-fasade for ${NAVident}`);

  _res.status(200).json({
    name,
    NAVident,
  });
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
