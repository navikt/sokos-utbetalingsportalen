import { TEAM } from "@config/team";
import { routeProxyWithOboToken } from "@utils/server/proxy";
import type { APIRoute } from "astro";

export const ALL: APIRoute = routeProxyWithOboToken({
	apiProxy: `${process.env.SKE_KRAV_API_PROXY}`,
	apiUrl: `${process.env.SKE_KRAV_API_URL}`,
	audience: `${process.env.SOKOS_SKATTEKORT_API_AUDIENCE}`,
	team: TEAM.SKATT_OG_TREKK,
});
