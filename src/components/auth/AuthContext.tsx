import { createContext } from "react";
import { UserData } from "../../types/UserData";

type AuthContextType = {
  userData: UserData;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
