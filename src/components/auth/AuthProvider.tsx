import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "@navikt/ds-react";
import { ApiError } from "../../types/ApiError";
import { UserData } from "../../types/UserData";
import { logFaroError } from "../../utils/grafanaFaro";
import { AuthContext } from "./AuthContext";

export function AuthProvider(props: PropsWithChildren) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  async function authenticateUser() {
    try {
      const response = await fetch("/userinfo");
      if (!response.ok) {
        const error = new Error("Failed to fetch user data from server");
        logFaroError(error);
        throw error;
      }
      const data = await response.json().catch((err) => {
        const error = new Error(err);
        logFaroError(error);
        throw error;
      });
      if (data.error) {
        const error = new Error("User data contains an error");
        logFaroError(error);
        throw error;
      }
      setUserData(data);
      setIsAuthenticated(true);
    } catch (error) {
      setError(new ApiError(`Internal server error: ${error}`));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    authenticateUser();
  }, [location]);

  if (loading) {
    return (
      <div className="w-full text-center py-16">
        <Loader size="2xlarge" title="Venter..." transparent />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-16">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ userData: userData!, isAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
}
