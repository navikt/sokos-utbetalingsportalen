import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { redirect, useLocation } from "react-router-dom";
import { Loader } from "@navikt/ds-react";
import {
  AzureAdGroupNameId,
  AzureAdGroupNames,
} from "../../auth/azureAdGroups";
import { ApiError } from "../../types/ApiError";
import { UserData } from "../../types/UserData";
import { authURL } from "../../urls";

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
    return (
      <div className="w-full text-center py-16 opacity-15">
        <Loader size="2xlarge" title="Venter..." transparent />
      </div>
    );
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
