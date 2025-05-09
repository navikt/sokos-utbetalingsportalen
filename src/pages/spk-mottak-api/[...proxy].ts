import type { APIRoute } from "astro";
import { routeProxyWithOboToken } from "src/utils/server/proxy";

export const ALL: APIRoute = routeProxyWithOboToken({
  apiProxy: `${process.env.SOKOS_SPK_MOTTAK_API_PROXY}`,
  apiUrl: `${process.env.SOKOS_SPK_MOTTAK_API}`,
  audience: `${process.env.SOKOS_SPK_MOTTAK_API_AUDIENCE}`,
});
