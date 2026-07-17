import { apps } from "@config/appConfig";
import type { App } from "@types/App";

function hasAccessToAdGroup(adGroups: string[], uuid: string): boolean {
	return adGroups.includes(uuid);
}

export function getAuthorizedApps(adGroups: string[]): App[] {
	return apps.filter((app) => hasAccessToApp(adGroups, app));
}

export function hasAccessToApp(adGroups: string[], app: App): boolean {
	return (
		hasAccessToAdGroup(adGroups, app.adGroupDevelopment) ||
		hasAccessToAdGroup(adGroups, app.adGroupProduction)
	);
}
