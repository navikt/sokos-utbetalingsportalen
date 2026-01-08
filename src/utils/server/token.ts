import { requestOboToken } from "@navikt/oasis";
import { extractAudienceService } from "@utils/audience";
import { logger } from "@utils/logger/index";

export const getOboToken = async (
	token: string,
	audience: string,
): Promise<string> => {
	const oboResult = await requestOboToken(token, audience);

	const audienceService = extractAudienceService(audience);

	if (!oboResult.ok) {
		logger.error(
			`Error getting obo token for audience ${audienceService}: ${oboResult.error}`,
		);
		return "";
	}

	return oboResult.token;
};
