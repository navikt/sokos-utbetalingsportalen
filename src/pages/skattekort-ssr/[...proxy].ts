import { routeProxyWithOboToken } from "@utils/server/proxy";
import type { APIRoute } from "astro";

export const ALL: APIRoute = routeProxyWithOboToken({
	apiProxy: "/skattekort-ssr",
	apiUrl: `${process.env.SOKOS_SKATTEKORT_SSR_URL}`,
	audience: `${process.env.SOKOS_SKATTEKORT_SSR_AUDIENCE}`,
});
