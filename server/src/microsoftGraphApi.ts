import { getOnBehalfOfToken } from "./onBehalfOfToken";
import { logger } from "./logger";

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

async function getUserADGroups(accessToken: string): Promise<string[]> {
  try {
    const oboToken = await getOnBehalfOfToken(accessToken, apiScope);
    const adGroupsResponse = await fetch(memberOfApiUrl, {
      headers: {
        Authorization: `Bearer ${oboToken.access_token}`,
        ConsistencyLever: "eventual",
      },
    });

    const adGroups: MemberOfResponse = await adGroupsResponse.json();
    console.log("HVA FÅR JEG HER 1111?? :: " + adGroups.value.map((groups) => groups.id));
    console.log("HVA FÅR JEG HER 2222?? :: ", adGroups);
    return adGroups.value.map((groups) => groups.id);
  } catch (error) {
    const errorMessage = "Fetch user ad groups failed";

    logger.error(errorMessage + ": " + error);
    throw new Error(errorMessage);
  }
}

export async function getUserAccesses(accessToken: string) {
  try {
    const userAdGroups = await getUserADGroups(accessToken);
    console.log("userAdGroups :: ", userAdGroups);
    return userAdGroups;
  } catch (error) {
    const errorMessage = "Klarte ikke å sjekke brukerens tilganger:";
    logger.error(errorMessage + ": " + error);
  }
}
