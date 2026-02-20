import { routeProxyWithOboToken } from "@utils/server/proxy";
import type { APIRoute } from "astro";

export const ALL: APIRoute = routeProxyWithOboToken({
	apiProxy: "/ray-ray-admin",
	apiUrl: `${process.env.SOKOS_UP_RAYRAY_ADMIN_URL}`,
	audience: `${process.env.SOKOS_UP_RAYRAY_ADMIN_AUDIENCE}`,
});
