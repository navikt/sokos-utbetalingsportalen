import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthProvider";
import { ApiError } from "../types/ApiError";
import { UserData } from "../types/UserData";
import { AzureAdGroupNameId, AzureAdGroupNames } from "./azureAdGroups";

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new ApiError("User context must be defined");
  }

  return context;
}

export function checkRouteAccess(
  userData: UserData,
  groupName: AzureAdGroupNames,
) {
  const adGroups = userData.adGroups;
  // eslint-disable-next-line no-console
  adGroups?.some((id) => console.log(id));

  return adGroups?.some((id) => id === AzureAdGroupNameId[groupName]);
}
