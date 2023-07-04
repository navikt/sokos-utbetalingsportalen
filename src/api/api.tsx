interface Props {
  path: string;
  options?: RequestInit;
}

class FetchError extends Error {
  response: Response;

  constructor(response: Response, message: string) {
    super(message);
    this.response = response;
  }
}

export const fetcher = async ({ path, options }: Props) => {
  const response = await fetch(path, options);

  if (!response.ok) {
    throw new FetchError(response, "Fetch request failed");
  }

  return await response.json();
};
