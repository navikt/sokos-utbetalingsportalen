import { authUrl } from "../urls";
import { UserInfo } from "../models/UserInfo";

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
  return fetch(authUrl)
    .then((response: Response) => response.json() as UserInfo)
    .catch(console.log);
};
