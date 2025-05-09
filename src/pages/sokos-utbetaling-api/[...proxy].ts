import type { APIRoute } from "astro";
import { routeProxyWithOboToken } from "src/utils/server/proxy";

export const ALL: APIRoute = routeProxyWithOboToken({
  apiProxy: `${process.env.SOKOS_UTBETALING_API_PROXY}`,
  apiUrl: `${process.env.SOKOS_UTBETALING_API}`,
  audience: `${process.env.SOKOS_UTBETALING_API_AUDIENCE}`,
});
