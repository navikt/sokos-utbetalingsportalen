export function getAppHostname(request: Request): URL {
  const requestUrl = new URL(request.url);
  const hostname = requestUrl.hostname;
  return new URL(hostname);
}
