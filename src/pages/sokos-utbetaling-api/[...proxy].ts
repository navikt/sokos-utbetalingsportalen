import { routeProxyWithOboToken } from "@utils/server/proxy";
import type { APIRoute } from "astro";

export const ALL: APIRoute = routeProxyWithOboToken({
	apiProxy: `${process.env.SOKOS_UTBETALING_API_PROXY}`,
	apiUrl: `${process.env.SOKOS_UTBETALING_API}`,
	audience: `${process.env.SOKOS_UTBETALING_API_AUDIENCE}`,
});
