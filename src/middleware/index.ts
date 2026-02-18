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
				"9c5b24f2-5e01-4966-adaf-bc9fb6410a32", // 0000-CA-SOKOS-MF-OPPGJORSRAPPORTER
				"3bc37bf2-8e76-407c-ad4a-d2c79edc241e", // 0000-GA-SOKOS-MF-Buntkontroll-READ
				"2020a765-ffae-4042-b4cc-2a5a783a3ec5", // 0000-GA-SOKOS-MF-Meldingsflyt-READ
				"7e0c2ad1-d0e7-4fa8-8169-7a9d68435644", // 0000-GA-SOKOS-MF-Fastedata
				"2477057d-7f80-4517-a885-20c948bf0367", // 0000-GA-SOKOS-MF-DARE-POC
				"c1c0f5d7-cdaa-4011-b4f6-b3815a7432e5", // 0000-CA-SOKOS-MF-YTELSESRAPPORTERING-PERSON-ADMIN
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
