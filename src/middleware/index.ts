import { getToken, validateAzureToken } from "@navikt/oasis";
import { UserDataSchema } from "@schema/UserDataSchema";
import { formatNameFromToken } from "@utils/formatNameFromToken";
import { logger } from "@utils/logger/index";
import {
	getServerSideEnvironment,
	isLocalAuthProxyEnabled,
} from "@utils/server/environment.ts";
import { defineMiddleware } from "astro/middleware";
import { LOCAL_DEV_USER } from "../../mock/auth/localDevUser";
import { isInternal } from "./utils";

export const onRequest = defineMiddleware(async (context, next) => {
	if (isInternal(context)) {
		return next();
	}

	const localAuthenticationEnabled = isLocalAuthProxyEnabled();

	// `pnpm dev` kjører uten mock-oauth2-server/Wonderwall i front, så det
	// finnes ingen ekte /oauth2/login å redirecte til. Bruk en syntetisk
	// lokal bruker for rask utvikling. Ekte innloggingsflyt testes med
	// `pnpm dev:mock` (se README «Teste innlogging lokalt»).
	if (getServerSideEnvironment() === "local" && !localAuthenticationEnabled) {
		context.locals.token = "local-dev-token";
		context.locals.userData = LOCAL_DEV_USER;
		return next();
	}

	const proxyUrl = localAuthenticationEnabled
		? (process.env.LOCAL_AUTH_PROXY_URL ?? "http://localhost:3000")
		: context.url.origin;
	const loginUrl = new URL("/oauth2/login", proxyUrl);
	const redirectTarget = localAuthenticationEnabled
		? new URL(
				`${context.url.pathname}${context.url.search}`,
				proxyUrl,
			).toString()
		: context.url.toString();
	loginUrl.searchParams.set("redirect", redirectTarget);
	const token = getToken(context.request.headers);

	if (!token) {
		logger.info(
			"Could not find any bearer token on the request. Redirecting to login.",
		);
		return context.redirect(loginUrl.toString());
	}

	const validatedToken = await validateAzureToken(token);

	if (!validatedToken.ok) {
		const error = new Error(
			`Invalid JWT token found (cause: ${validatedToken.errorType} ${validatedToken.error}, redirecting to login.`,
		);
		logger.error(error);
		return context.redirect(loginUrl.toString());
	}

	context.locals.token = token;

	const response = UserDataSchema.safeParse(validatedToken.payload);
	if (!response.success) {
		const error = new Error(
			`Invalid user info found in JWT token (cause: ${response.error}, redirecting to login.`,
		);
		logger.error(error);
		return context.redirect(loginUrl.toString());
	}

	context.locals.userData = {
		...response.data,
		name: formatNameFromToken(response.data.name),
	};

	return next();
});
