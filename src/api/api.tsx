import { authUrl } from "../urls";
import { UserData } from "../models/UserData";

type Props = {
  path: string;
  options?: object;
};

class FetchError extends Error {
  response: Response;

  constructor(response: Response, message: string) {
    super(message);
    this.response = response;
  }
}

export const includeCredentials = {
  credentials: "include",
};

export const fetcher = async ({ path, options }: Props) => {
  const response = await fetch(path, {
    method: "GET",
    ...options,
  });

  if (!response.ok) {
    throw new FetchError(response, "Fetch request failed");
  }

  return await response.json();
};

export const authenticationLoader = async () => {
  try {
    const response = await fetch(authUrl);
    if (response.ok) {
      const userData: UserData = await response.json();
      return userData;
    }
  } catch (error) {
    throw new Error("Failed to fetch authentication data");
  }
};
