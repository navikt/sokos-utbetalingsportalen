import { routeProxyWithOboToken } from "@utils/server/proxy";
import type { APIRoute } from "astro";

export const ALL: APIRoute = routeProxyWithOboToken({
	apiProxy: `${process.env.SOKOS_DARE_POC_API_PROXY}`,
	apiUrl: `${process.env.SOKOS_DARE_POC_API}`,
	audience: `${process.env.SOKOS_DARE_POC_API_AUDIENCE}`,
});
