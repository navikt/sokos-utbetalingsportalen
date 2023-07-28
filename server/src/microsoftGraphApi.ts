import { z } from "zod";
import { getOnBehalfOfToken } from "./onBehalfOfToken";
import { logger } from "./logger";
import Config from "./config";

const apiScope = "https://graph.microsoft.com/.default";
const memberOfApiQuery = "$count=true&$orderby=displayName&$filter=startswith(displayName, '0000-GA-SOKOS-MF')";
const memberOfApiUrl = "https://graph.microsoft.com/v1.0/me/memberOf/?" + memberOfApiQuery;

const Membership = z.object({
  id: z.string(),
  displayName: z.string(),
});

const MembershipResponseSchema = z.object({
  value: z.array(Membership),
});

const READ_SUFFIX = "READ";

async function getUserADGroups(accessToken: string) {
  try {
    const oboToken = await getOnBehalfOfToken(accessToken, apiScope);
    const adGroupsResponse = await fetch(memberOfApiUrl, {
      headers: {
        Authorization: `Bearer ${oboToken.access_token}`,
        ConsistencyLevel: "eventual",
      },
    });
    const validateAdGroupsResponse = MembershipResponseSchema.parse(await adGroupsResponse.json());
    return validateAdGroupsResponse.value.map((group) => group.id);
  } catch (error) {
    const errorMessage = "Fetch user ad groups failed: ";
    logger.error(errorMessage + error);
    throw new Error(errorMessage);
  }
}

export async function getUserAccesses(accessToken: string) {
  try {
    const adGroupsMemberOf = await getUserADGroups(accessToken);
    return filterADGroups(adGroupsMemberOf);
  } catch (error) {
    const errorMessage = "Failed to check user accesses: ";
    logger.error(errorMessage + error);
    throw new Error(errorMessage);
  }
}

function filterADGroups(adGroupsMemberOf: string[]) {
  const allAdGroups: string[] = Object.entries(Config)
    .filter(([key]) => key.endsWith(READ_SUFFIX))
    .map(([, value]) => value);

  return adGroupsMemberOf.filter((adGroup) => allAdGroups.includes(adGroup));
}
