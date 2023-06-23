import { authUrl } from "../urls";
import { AzureAdGroupNameId } from "./azureAdGroups";
import { redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetcher } from "../api/api";

export const authenticationLoader = async () => {
  try {
    return await fetcher({ path: authUrl });
  } catch (error) {
    throw new Error("Fetch request failed");
  }
};
const getAzureAdGroups = async () => {
  const data = await authenticationLoader();
  if (!data) {
    throw Error("Cannot fetch AD Groups");
  }
  return data.adGroups as Array<string>;
};

const hasAccessToMicrofrontend = async (azureGroup: string) =>
  (await getAzureAdGroups()).some((azureAdGroupId) => azureAdGroupId === AzureAdGroupNameId[azureGroup]);

export const checkAccessToMicrofrontend = (groupName: string) => async () => {
  if (!(await hasAccessToMicrofrontend(groupName))) return redirect("/forbidden");
  else return true;
};

export const useAuth = () => {
  const [groups, setGroups] = useState<Array<string>>([]);
  useEffect(() => {
    getAzureAdGroups()
      .then((adGroups) => setGroups(adGroups))
      .catch((error) => {
        throw new Error("Failed to load Azure AD groups:", error);
      });
  }, []);
  return (group: string) => groups.some((id) => id === AzureAdGroupNameId[group]);
};
