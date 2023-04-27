"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeAzureAd = exports.hentBrukerIdent = exports.userIsLoggedIn = void 0;
const jose_1 = require("jose");
const openid_client_1 = require("openid-client");
const logger_1 = require("./logger");
const discoveryUrl = process.env.AZURE_APP_WELL_KNOWN_URL;
const clientId = process.env.AZURE_APP_CLIENT_ID;
const jwksUri = process.env.AZURE_OPENID_CONFIG_JWKS_URI;
let azureAdIssuer;
let remoteJWKSet;
const navIdentClaim = "NAVident";
const nameClaim = "name";
function discoverAzureAdIssuer() {
  return __awaiter(this, void 0, void 0, function* () {
    if (discoveryUrl) {
      azureAdIssuer = yield openid_client_1.Issuer.discover(discoveryUrl);
    } else {
      throw Error(`Miljøvariabelen "AZURE_APP_WELL_KNOWN_URL" må være definert`);
    }
  });
}
function initializeRemoteJWKSet() {
  const jwksUrl = new URL(jwksUri || "");
  remoteJWKSet = (0, jose_1.createRemoteJWKSet)(jwksUrl);
}
function tokenIsValid(brukerensAccessToken) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const verification = yield (0, jose_1.jwtVerify)(brukerensAccessToken, remoteJWKSet, {
        audience: clientId,
        issuer: azureAdIssuer.metadata.issuer,
      });
      return !!verification.payload;
    } catch (e) {
      logger_1.logger.error("Noe galt skjedde under validering av token:", e);
      return false;
    }
  });
}
function hentNavIdent(token) {
  const claims = (0, jose_1.decodeJwt)(token);
  const navIdent = String(claims[navIdentClaim]) || "";
  const name = String(claims[nameClaim]) || "";
  return { navIdent, name };
}
function retrieveToken(headers) {
  var _a;
  const brukerensAccessToken =
    (_a = headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
  if (!brukerensAccessToken) {
    throw Error("Kunne ikke hente token");
  }
  return brukerensAccessToken;
}
function userIsLoggedIn(req) {
  return __awaiter(this, void 0, void 0, function* () {
    const brukerensAccessToken = retrieveToken(req.headers);
    return !!brukerensAccessToken && (yield tokenIsValid(brukerensAccessToken));
  });
}
exports.userIsLoggedIn = userIsLoggedIn;
const hentBrukerIdent = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const brukerensAccessToken = retrieveToken(req.headers);
    const brukerInformasjon = hentNavIdent(brukerensAccessToken);
    res.status(200).json({
      brukerInformasjon,
    });
  });
exports.hentBrukerIdent = hentBrukerIdent;
function initializeAzureAd() {
  return __awaiter(this, void 0, void 0, function* () {
    yield discoverAzureAdIssuer()
      .then(initializeRemoteJWKSet)
      .catch((e) => {
        throw Error("Klarte ikke å initialisere AzureAD:" + e);
      });
  });
}
exports.initializeAzureAd = initializeAzureAd;
