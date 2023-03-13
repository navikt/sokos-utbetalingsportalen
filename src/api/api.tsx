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
