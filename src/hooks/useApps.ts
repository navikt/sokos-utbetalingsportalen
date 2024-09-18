import { AzureAdGroupNameId, AzureAdGroupNames } from "../auth/azureAdGroups";
import { useAuthContext } from "../components/auth/AuthProvider";
import { App, Apps } from "../models/apps";
import { getEnvironment } from "../utils/environment";

export default function useApps() {
  const authContext = useAuthContext();
  const authorizedApps = Apps.filter((app) => hasAccess(app.group));
  const allApps = [
    ...authorizedApps,
    ...Apps.filter((app) => !hasAccess(app.group)).filter(
      (app) => !hideApp(app),
    ),
  ];

  function hasAccess(group: AzureAdGroupNames) {
    return authContext.userData.adGroups.some(
      (id) => id === AzureAdGroupNameId[group],
    );
  }

  function hideApp(app: App) {
    return app.onlyForDevelopment && getEnvironment() === "local";
  }

  return { authorizedApps, allApps };
}
