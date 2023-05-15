import { getUserADGroups } from "./microsoftGraphApi";
import { retrieveToken } from "./middelwares";
import { NextFunction, Request, RequestHandler, Response } from "express";
import AccessCache from "./accessCache";
import { logger } from "./logger";

export const cache = new AccessCache();
const checkAccessPolicy = async (accessToken: string): Promise<string[]> => {
  return await getUserADGroups(accessToken);
};
export const getUserAccessPolicy: RequestHandler = async (request: Request, response: Response, next: NextFunction) => {
  const userAccessToken = retrieveToken(request.headers);

  try {
    const userAdGroups = await checkAccessPolicy(userAccessToken);
    console.log("HVA FÅR JEG UT HER?? :: ", userAdGroups);
    return userAdGroups;
  } catch (error) {
    const errorMessage = "Klarte ikke å sjekke brukerens tilganger:";
    logger.error(errorMessage + ": " + error);
    response.status(500).send(errorMessage);
  }
};
