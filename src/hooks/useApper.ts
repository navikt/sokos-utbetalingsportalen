import { useEffect, useState } from "react";
import { getAzureAdGroups } from "../auth/authentication";
import { AzureAdGroupNameId, AzureAdGroupNames } from "../auth/azureAdGroups";
import { App, Apper } from "../models/apper";
import { getEnvironment } from "../utils/environment";

const useApper = () => {
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
  const apperMedTilgang = Apper.filter((app) => hasAccess(app.group));

  const hideApp = (app: App) =>
    app.onlyForDevelopment && getEnvironment() === "production";

  const alleApper = [
    ...apperMedTilgang,
    ...Apper.filter((app) => !hasAccess(app.group) && !hideApp(app)),
  ];

  return { apperMedTilgang, alleApper };
};

export default useApper;
