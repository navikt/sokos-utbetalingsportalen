import type { APIRoute } from "astro";
import { routeProxyWithOboToken } from "src/utils/server/proxy";

export const ALL: APIRoute = routeProxyWithOboToken({
  apiProxy: `${process.env.SOKOS_KONTOREGISTER_API_PROXY}`,
  apiUrl: `${process.env.SOKOS_KONTOREGISTER_API}`,
  audience: `${process.env.SOKOS_KONTOREGISTER_API_AUDIENCE}`,
});
