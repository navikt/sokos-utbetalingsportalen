import { requestOboToken } from "@navikt/oasis";
import { extractServiceNameFromAudience } from "@utils/audience";
import { logger, teamLogger } from "@utils/logger/index";

type OboDebugContext = {
	navident?: string;
	route?: string;
	method?: string;
	[key: string]: unknown;
};

export const getOboToken = async (
	token: string,
	audience: string,
	debugContext?: OboDebugContext,
): Promise<string> => {
	const oboResult = await requestOboToken(token, audience);

	const audienceService = extractServiceNameFromAudience(audience);

	if (!oboResult.ok) {
		logger.error(
			`Error getting obo token for audience ${audienceService}: ${oboResult.error}`,
		);
		teamLogger.error(
			{ ...debugContext, audience },
			`Error getting obo token for audience ${audienceService}: ${oboResult.error}`,
		);
		return "";
	}

	return oboResult.token;
};
