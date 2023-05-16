import { getOnBehalfOfToken } from "./onBehalfOfToken";
import { logger } from "./logger";
import Configuration from "./config";

const apiScope = "https://graph.microsoft.com/.default";
const memberOfApiQuery = "$count=true&$orderby=displayName&$filter=startswith(displayName, '0000-GA-SOKOS-MF')";
const memberOfApiUrl = "https://graph.microsoft.com/v1.0/me/memberOf/?" + memberOfApiQuery;

type Membership = {
  id: string;
  displayName: string;
};

type MemberOfResponse = {
  value: Membership[];
};

const prefix = "AD_GRUPPE_SOKOS_MF_";
const allAdGroups: string[] = Object.entries(Configuration)
  .filter(([key]) => key.startsWith(prefix))
  .map(([_, value]) => value);

async function getUserADGroups(accessToken: string): Promise<string[]> {
  try {
    const oboToken = await getOnBehalfOfToken(accessToken, apiScope);
    const adGroupsResponse = await fetch(memberOfApiUrl, {
      headers: {
        Authorization: `Bearer ${oboToken.access_token}`,
        ConsistencyLevel: "eventual",
      },
    });

    const adGroups: MemberOfResponse = await adGroupsResponse.json();
    return adGroups.value.map((groups) => groups.id);
  } catch (error) {
    const errorMessage = "Fetch user ad groups failed: ";
    logger.error(errorMessage + error);
    throw new Error(errorMessage);
  }
}

export async function getUserAccesses(accessToken: string): Promise<string[]> {
  try {
    const adGroupsMemberOf = await getUserADGroups(accessToken);
    const haveAccessesToGroups = adGroupsMemberOf.filter((adGroup) => allAdGroups.includes(adGroup));
    console.log("haveAccessesToGroups :::: ", haveAccessesToGroups);
    return haveAccessesToGroups;
  } catch (error) {
    const errorMessage = "Failed to check user accesses: ";
    logger.error(errorMessage + error);
    throw new Error(errorMessage);
  }
}
