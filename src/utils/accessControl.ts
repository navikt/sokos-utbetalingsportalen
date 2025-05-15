import { microfrontendConfigArray as allApps } from "../microfrontend";
import type { MicroFrontend } from "../microfrontend";

function hasAccessToAdGroup(adGroups: string[], uuid: string): boolean {
  return adGroups.includes(uuid);
}

export function getAuthorizedApps(adGroups: string[]): MicroFrontend[] {
  return allApps.filter((app) => hasAccessToApp(adGroups, app));
}

export function hasAccessToApp(
  adGroups: string[],
  app: MicroFrontend,
): boolean {
  return (
    hasAccessToAdGroup(adGroups, app.adGroupDevelopment) ||
    hasAccessToAdGroup(adGroups, app.adGroupProduction)
  );
}
