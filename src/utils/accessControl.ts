import type { MicroFrontend } from "../microfrontend";
import { microfrontendConfigArray as allApps } from "../microfrontend";
import { getClientSideEnvironment } from "./client/environments";

function hasAccessToAdGroup(adGroups: string[], uuid: string): boolean {
  return adGroups.includes(uuid);
}

/**
 * Checks if an application is available in the current environment
 * @param app The microfrontend application configuration
 * @returns true if the app is available in the current environment
 */
export function isAppAvailableInCurrentEnvironment(
  app: MicroFrontend,
): boolean {
  const environment = getClientSideEnvironment();

  // Placeholder UUID pattern - indicates app is not available in that environment
  const placeholderPattern = /^x{8}-x{4}-x{4}-x{4}-x{12}$/;

  switch (environment) {
    case "production":
      // In production, only show apps with valid (non-placeholder) production AD groups
      return !placeholderPattern.test(app.adGroupProduction);
    case "development":
      // In development, only show apps with valid development AD groups
      return !placeholderPattern.test(app.adGroupDevelopment);
    case "local":
      // In local environment, show all apps
      return true;
    default:
      return true;
  }
}

/**
 * Gets all applications that are available in the current environment
 * @returns Array of microfrontends available in current environment
 */
export function getEnvironmentFilteredApps(): MicroFrontend[] {
  return allApps.filter(isAppAvailableInCurrentEnvironment);
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
