import {
  FlattenedJWSInput,
  JWSHeaderParameters,
  createRemoteJWKSet,
  jwtVerify,
} from "jose";
import { GetKeyFunction } from "jose/dist/types/types";
import { Client, Issuer } from "openid-client";
import Config from "./config";

let _issuer: Issuer<Client>;
let _remoteJWKSet: GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>;

async function jwks() {
  _remoteJWKSet = createRemoteJWKSet(
    new URL(Config.AZURE_OPENID_CONFIG_JWKS_URI),
  );
  return _remoteJWKSet;
}

export async function issuer() {
  _issuer = await Issuer.discover(Config.AZURE_APP_WELL_KNOWN_URL);
  return _issuer;
}

export async function validateToken(token: string | Uint8Array) {
  return jwtVerify(token, await jwks(), {
    issuer: (await issuer()).metadata.issuer,
  });
}
