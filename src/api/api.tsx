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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const fetcher = async ({ queryKey }) => {
  const response = await fetch(queryKey, {
    method: "GET",
    credentials: "include",
  });
  checkResponse(response);

  return response.json();
};
