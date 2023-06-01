import { authUrl } from "../urls";
import { AzureAdGroupNameId } from "../azureAdGroups";
import { redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetcher } from "./api";

export const authenticationLoader = async () => {
  try {
    const response = await fetcher({ path: authUrl });
    console.log("response :::::: ", response);
    return response;
  } catch (error) {
    console.log("feil inne i authenticationLoader");
    throw new Error("Fetch request failed");
  }
};
const getAzureAdGroups = async () => {
  const data = await authenticationLoader();
  console.log("data ::::: ", JSON.stringify(data));
  if (!data) {
    console.log("Feil inne i getAzureAdGroups");
    throw Error("Cannot fetch AD Groups");
  }
  console.log("data.adGroups ::::: ", data.adGroups);
  return data.adGroups || ([] as Array<string>);
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
