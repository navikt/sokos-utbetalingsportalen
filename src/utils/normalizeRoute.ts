/**
 * Ensures a route always has a leading slash
 * @param route The route path to normalize
 * @returns Route path with leading slash
 */
export function normalizeRoute(route: string): string {
  return route.startsWith("/") ? route : `/${route}`;
}
