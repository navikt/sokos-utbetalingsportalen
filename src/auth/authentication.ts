import { redirect } from "react-router-dom";
import RestService from "../services/rest-service";
import { AzureAdGroupNameId, AzureAdGroupNames } from "./azureAdGroups";

export const authenticationLoader = async () => {
  try {
    return RestService.fetchLoggedInUser();
  } catch (_) {
    throw new Error("Fetch request failed");
  }
};

export const getAzureAdGroups = async () => {
  const data = await authenticationLoader();
  if (!data) {
    throw Error("Cannot fetch AD Groups");
  }
  return data.adGroups as Array<string>;
};

export const checkRouteAccess = (groupName: AzureAdGroupNames) => async () => {
  const adGroups = await getAzureAdGroups();
  if (adGroups.some((id) => id === AzureAdGroupNameId[groupName])) return null;
  return redirect("/forbidden");
};
