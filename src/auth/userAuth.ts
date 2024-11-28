import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthContext";
import { AzureAdGroupNameId } from "../config/microfrontend";
import { UserData } from "../types/UserData";
import { logFaroError } from "../utils/grafanaFaro";

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    const error = new Error("User context must be defined");
    logFaroError(error);
    throw error;
  }

  return context;
}

export function checkRouteAccess(userData: UserData, groupName: string) {
  const adGroups = userData.adGroups;
  return adGroups?.some((id) => id === AzureAdGroupNameId(groupName));
}
