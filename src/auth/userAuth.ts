import { useContext } from "react";
import { redirect } from "react-router-dom";
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
  if (adGroups?.some((id) => id === AzureAdGroupNameId[groupName])) return null;
  return redirect("/forbidden");
}
