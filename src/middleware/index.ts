import { getToken, validateAzureToken } from "@navikt/oasis";
import { defineMiddleware } from "astro/middleware";
import { logger } from "src/utils/logger.ts";
import { isInternal } from "./utils";
import { getServerSideEnvironment } from "src/utils/server/environment.ts";
import { UserDataSchema } from "src/types/schema/UserDataSchema";
import { logFaroError } from "src/components/observability/Observability";

export const onRequest = defineMiddleware(async (context, next) => {
  const loginPath = `/oauth2/login?redirect=${context.url}`;
  const token = getToken(context.request.headers);
  const params = encodeURIComponent(context.url.search);

  if (getServerSideEnvironment() === "local") {
    context.locals.userInfo = {
      NAVident: "Z123456",
      name: "Ola Mohammed",
      groups: [
        "0e58dc41-7c57-4b79-a8c7-d0caec129e53", // 0000-GA-SOKOS-MF-SPK-Mottak-ADMIN
        "a13b4176-e328-4e1c-b181-ff676a7146b1", // 0000-GA-SOKOS-MF-Skattekort-READ
        "b01fb216-fcb3-4ede-b7da-71fffe859763", // 0000-GA-SOKOS-MF-ORS-READ
        "98146b9a-1891-44e3-9b61-92130c2fcd8b", // 0000-GA-SOKOS-MF-KRP-READ
        "e0023d91-26bc-4d5d-95ba-3148b6123afc", // 0000-GA-SOKOS-MF-Oppdragsinfo-READ
        "0de8d01f-8ad0-4391-841c-55392956bc17", // 0000-GA-SOKOS-MF-Attestasjon
        "391bec9e-e71e-42cb-a030-56c394dd13fd", // 0000-GA-SOKOS-MF-Resending-Bank-READ
        "bdcedce3-dab5-4b68-b1d3-8625cd0d3b55", // 0000-GA-SOKOS-MF-KRO-READ
        "138d21fb-4e96-46d6-91e4-e3926aa349e5", // 0000-GA-SOKOS-MF-Utbetaling
        "3bc37bf2-8e76-407c-ad4a-d2c79edc241e", // 0000-GA-SOKOS-MF-Buntkontroll-READ
        "48a80bbb-be45-4ef6-aab8-21604f057f47", // 0000-GA-SOKOS-MF-Venteregister
        "2020a765-ffae-4042-b4cc-2a5a783a3ec5", // 0000-GA-SOKOS-MF-Meldingsflyt-READ
      ],
    };

    return next();
  }

  if (isInternal(context)) {
    return next();
  }

  if (!token) {
    logger.info(
      "Could not find any bearer token on the request. Redirecting to login.",
    );
    return context.redirect(loginPath);
  }

  const validatedToken = await validateAzureToken(token);

  if (!validatedToken.ok) {
    const error = new Error(
      `Invalid JWT token found (cause: ${validatedToken.errorType} ${validatedToken.error}, redirecting to login.`,
    );
    logger.error(error);
    return context.redirect(`${loginPath}${params}`);
  }

  context.locals.token = token;

  const response = UserDataSchema.safeParse(validatedToken.payload);
  if (!response.success) {
    const error = new Error(
      `Invalid user info found in JWT token (cause: ${response.error}, redirecting to login.`,
    );
    logger.error(error);
    logFaroError(error);
    return context.redirect(`${loginPath}${params}`);
  }

  context.locals.userInfo = UserDataSchema.parse(response.data);

  return next();
});
