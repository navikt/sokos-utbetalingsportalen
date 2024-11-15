import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthContext";
import { AzureAdGroupNameId } from "../config/microfrontend";
import { ApiError } from "../types/ApiError";
import { UserData } from "../types/UserData";

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new ApiError("User context must be defined");
  }

  return context;
}

export function checkRouteAccess(userData: UserData, groupName: string) {
  const adGroups = userData.adGroups;
  return adGroups?.some((id) => id === AzureAdGroupNameId(groupName));
}
