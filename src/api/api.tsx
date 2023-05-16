import { authUrl } from "../urls";
import { UserDataInfo } from "../models/UserDataInfo";

class FetchError extends Error {
  response: Response;

  constructor(response: Response, message: string) {
    super(message);
    this.response = response;
  }
}

const checkResponse = (response: Response) => {
  if (!response.ok) {
    throw new FetchError(response, "Fetch request failed");
  }
};

export const fetcher = async (url: URL) => {
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });
  checkResponse(response);

  return response.json();
};

export const authenticationLoader = async () => {
  try {
    const response = await fetch(authUrl);
    if (response.ok) {
      const userDataInfo: UserDataInfo = await response.json();
      console.log(userDataInfo);
      return userDataInfo;
    }
  } catch (error) {
    throw new Error("Failed to fetch authentication data");
  }
};
