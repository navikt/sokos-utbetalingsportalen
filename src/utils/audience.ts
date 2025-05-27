export function extractAudienceService(audience: string): string {
  const prefix = "api://";
  const suffix = "/.default";
  return audience.slice(prefix.length, -suffix.length);
}
