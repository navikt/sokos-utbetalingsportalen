import { useEffect, useState } from "react";
import { getAzureAdGroups } from "../auth/authentication";
import { AzureAdGroupNameId, AzureAdGroupNames } from "../auth/azureAdGroups";
import { Apper } from "../models/apper";

const useApper = () => {
  const [groups, setGroups] = useState<Array<string>>([]);
  useEffect(() => {
    getAzureAdGroups()
      .then((adGroups) => setGroups(adGroups))
      .catch((error) => {
        throw new Error("Failed to load Azure AD groups:", error);
      });
  }, []);

  const hasAccess = (group: AzureAdGroupNames) => groups.some((id) => id === AzureAdGroupNameId[group]);
  const apperMedTilgang = Apper.filter((app) => hasAccess(app.group));
  const alleApper = [...apperMedTilgang, ...Apper.filter((app) => !hasAccess(app.group))];

  return { apperMedTilgang, alleApper };
};

export default useApper;
