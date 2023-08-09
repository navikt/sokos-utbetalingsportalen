type Props = {
  path: string;
  options?: RequestInit;
};

class FetchError extends Error {
  response: Response;

  constructor(response: Response, message: string) {
    super(message);
    this.response = response;
  }
}

export const fetcher = async <TData = unknown>({ path, options }: Props): Promise<TData> => {
  const response = await fetch(path, options);

  if (!response.ok) {
    throw new FetchError(response, "Fetch request failed");
  }

  return await response.json();
};
