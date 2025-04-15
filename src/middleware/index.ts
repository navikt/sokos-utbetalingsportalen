import { defineMiddleware } from "astro/middleware";
import { getToken, validateToken } from "@navikt/oasis";
import { isLocal } from "../utils/server/urls.ts";
import { loginUrl } from "./urls";
import { isInternal } from "./utils";

export const onRequest = defineMiddleware(async (context, next) => {
  const token = getToken(context.request.headers);
  const params = encodeURIComponent(context.url.search);

  if (isLocal) {
    context.locals.userInfo = {
      navIdent: "Z123456",
      name: "Ola Mohammed",
      adGroups: [
        "0de8d01f-8ad0-4391-841c-55392956bc17",
        "e0023d91-26bc-4d5d-95ba-3148b6123afc",
      ],
    };
    return next();
  }

  if (isInternal(context)) {
    return next();
  }

  if (!token) {
    console.info(
      "Could not find any bearer token on the request. Redirecting to login.",
    );
    return context.redirect(`${loginUrl}${params}`);
  }

  const validation = await validateToken(token);

  if (!validation.ok) {
    const error = new Error(
      `Invalid JWT token found (cause: ${validation.errorType} ${validation.error}, redirecting to login.`,
    );
    console.error(error);
    return context.redirect(`${loginUrl}${params}`);
  }

  context.locals.token = token;

  context.locals.userInfo = {
    navIdent: validation.payload.NAVident as string,
    name: validation.payload.name as string,
    adGroups: validation.payload.groups as string[],
  };

  return next();
});
