import { getAppConfig } from "@config/appConfig";
import { getToken, validateAzureToken } from "@navikt/oasis";
import { UserDataSchema } from "@schema/UserDataSchema";
import { formatNameFromToken } from "@utils/formatNameFromToken";
import { logger } from "@utils/logger/index";
import { getServerSideEnvironment } from "@utils/server/environment.ts";
import { defineMiddleware } from "astro/middleware";
import { isInternal } from "./utils";

export const onRequest = defineMiddleware(async (context, next) => {
	const loginPath = `/oauth2/login?redirect=${context.url}`;
	const token = getToken(context.request.headers);
	const params = encodeURIComponent(context.url.search);

	if (getServerSideEnvironment() === "local") {
		context.locals.userData = {
			NAVident: "Z123456",
			name: "Erling Braut Haaland",
			groups: [
				getAppConfig("DARE").adGroupDevelopment,
				getAppConfig("ATTESTASJON").adGroupDevelopment,
				getAppConfig("OPPDRAGSINFO").adGroupDevelopment,
				getAppConfig("FASTEDATA").adGroupDevelopment,
				getAppConfig("SKATTEKORT").adGroupDevelopment,
				getAppConfig("SKATTEKORT-ADMIN").adGroupDevelopment,
				getAppConfig("SPK-MOTTAK").adGroupDevelopment,
				getAppConfig("RESENDING-BANK").adGroupDevelopment,
				getAppConfig("KRP").adGroupDevelopment,
				getAppConfig("KRO").adGroupDevelopment,
				getAppConfig("ORS").adGroupDevelopment,
				getAppConfig("UTBETALING").adGroupDevelopment,
				getAppConfig("BUNTKONTROLL").adGroupDevelopment,
				getAppConfig("MELDINGSFLYT").adGroupDevelopment,
				getAppConfig("RETUR-FRA-BANK").adGroupDevelopment,
				getAppConfig("OPPGJORSRAPPORTER").adGroupDevelopment,
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
		return context.redirect(`${loginPath}${params}`);
	}

	context.locals.userData = {
		...response.data,
		name: formatNameFromToken(response.data.name),
	};

	return next();
});
