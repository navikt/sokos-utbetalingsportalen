import { requestOboToken } from "@navikt/oasis";
import { logger } from "@utils/logger";

export const getOboToken = async (
  token: string,
  audience: string,
): Promise<string> => {
  const oboResult = await requestOboToken(token, audience);

  if (!oboResult.ok) {
    logger.error(
      `Error getting obo token for audience ${audience}: ${oboResult.error}`,
    );
    throw new Error(`Request oboToken for ${audience} failed `);
  }

  return oboResult.token;
};
