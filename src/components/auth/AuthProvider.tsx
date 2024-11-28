import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "@navikt/ds-react";
import { UserData } from "../../types/UserData";
import { UserDataSchema } from "../../types/schema/UserDataSchema";
import { logFaroError } from "../../utils/grafanaFaro";
import { AuthContext } from "./AuthContext";

export function AuthProvider(props: PropsWithChildren) {
  const [userData, setUserData] = useState<UserData>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const location = useLocation();

  async function authenticateUser() {
    try {
      const response = await fetch("/userinfo");
      if (!response.ok) {
        const error = new Error(
          `Failed to fetch user from server: ${response.statusText}}`,
        );
        setError(error);
      }
      const parseResult = UserDataSchema.safeParse(await response.json());
      if (!parseResult.success) {
        const error = new Error(
          `Failed to parse user data: ${parseResult.error}`,
        );
        setError(error);
      }
      setUserData(parseResult.data);
      setIsAuthenticated(true);
    } catch (err) {
      const error = new Error(`Failed to authenticate user, ${err}`);
      setError(error);
    }
  }

  useEffect(() => {
    authenticateUser();
  }, [location]);

  if (error) {
    logFaroError(error);
    throw error;
  }

  if (!isAuthenticated) {
    return (
      <div className="w-full text-center py-16">
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
