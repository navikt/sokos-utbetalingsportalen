import { useEffect, useState } from "react";
import { getAzureAdGroups } from "../auth/authentication";
import { AzureAdGroupNameId, AzureAdGroupNames } from "../auth/azureAdGroups";
import { App, Apps } from "../models/apps";
import { getEnvironment } from "../utils/environment";

const useApps = () => {
  const [groups, setGroups] = useState<Array<string>>([]);
  useEffect(() => {
    getAzureAdGroups()
      .then((adGroups) => setGroups(adGroups))
      .catch((error) => {
        throw new Error("Failed to load Azure AD groups:", error);
      });
  }, []);

  const hasAccess = (group: AzureAdGroupNames) =>
    groups.some((id) => id === AzureAdGroupNameId[group]);
  const authorizedApps = Apps.filter((app) => hasAccess(app.group));

  const hideApp = (app: App) =>
    app.onlyForDevelopment && getEnvironment() === "local";

  const allApps = [
    ...authorizedApps,
    ...Apps.filter((app) => !hasAccess(app.group)).filter(
      (app) => !hideApp(app),
    ),
  ];

  return { authorizedApps, allApps };
};

export default useApps;
