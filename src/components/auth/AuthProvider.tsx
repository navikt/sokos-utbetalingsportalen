import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { redirect, useLocation } from "react-router-dom";
import {
  AzureAdGroupNameId,
  AzureAdGroupNames,
} from "../../auth/azureAdGroups";
import { UserData } from "../../models/userData";
import { ApiError } from "../../types/errors";
import { authURL } from "../../urls";
import ContentLoader from "../loader/ContentLoader";

interface AuthContextType {
  userData: UserData;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider(props: PropsWithChildren) {
  const [userData, setUserData] = useState<UserData>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const location = useLocation();

  async function authenticateUser() {
    try {
      const response = await fetch(authURL);
      const data = await response.json();
      if (data.error) {
        setError(new ApiError("Failed to fetch user data", data.error));
      }
      setUserData(data);
      setIsAuthenticated(true);
    } catch (error) {
      setError(new ApiError("Internal server error, " + error));
    }
  }

  useEffect(() => {
    authenticateUser().catch((error) => {
      setError(error);
    });
  }, [location]);

  if (error) {
    throw error;
  }

  if (!isAuthenticated) {
    return <ContentLoader />;
  }

  return (
    <AuthContext.Provider value={{ userData: userData!, isAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new ApiError("Authontext must be used within a AuthProvider");
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
