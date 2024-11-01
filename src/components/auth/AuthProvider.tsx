import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "@navikt/ds-react";
import { ApiError } from "../../types/ApiError";
import { UserData } from "../../types/UserData";
import { authURL } from "../../urls";
import { AuthContext } from "./AuthContext";

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
