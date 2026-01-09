import { routeProxyWithOboToken } from "@utils/server/proxy";
import type { APIRoute } from "astro";

export const ALL: APIRoute = routeProxyWithOboToken({
	apiProxy: "/oppgjorsrapporter",
	apiUrl: `${process.env.SOKOS_UP_OPPGJORSRAPPORTER_URL}`,
	audience: `${process.env.SOKOS_UP_OPPGJORSRAPPORTER_AUDIENCE}`,
});
