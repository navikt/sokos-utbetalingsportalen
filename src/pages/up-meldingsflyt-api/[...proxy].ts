import { routeProxyWithOboToken } from "@utils/server/proxy";
import type { APIRoute } from "astro";

export const ALL: APIRoute = routeProxyWithOboToken({
	apiProxy: `${process.env.SOKOS_MELDINGSFLYT_API_PROXY}`,
	apiUrl: `${process.env.SOKOS_MELDINGSFLYT_API}`,
	audience: `${process.env.SOKOS_MELDINGSFLYT_API_AUDIENCE}`,
});
