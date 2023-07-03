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
    ...options,
  });

  if (!response.ok) {
    throw new FetchError(response, "Error in response");
  }

  return await response.json();
};
