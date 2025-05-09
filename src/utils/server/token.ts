import { requestOboToken } from "@navikt/oasis";

export const getOboToken = async (
  token: string,
  audience: string,
): Promise<string> => {
  const oboResult = await requestOboToken(token, audience);

  if (!oboResult.ok) {
    console.error("Error getting access token: " + oboResult.error);
    throw new Error(`Request oboToken for ${audience} failed `);
  }

  return oboResult.token;
};
