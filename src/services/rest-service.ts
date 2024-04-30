import axios from "axios";
import { ApiError, HttpStatusCodeError } from "../types/errors";
import { UserData } from "../models/userData";
import { authURL } from "../urls";
import { useEffect, useState } from "react";
import { getAzureAdGroups } from "../auth/authentication";
import { AzureAdGroupNameId, AzureAdGroupNames } from "../auth/azureAdGroups";

const api = axios.create({
  timeout: 30000,
  withCredentials: true,
  headers: { Pragma: "no-cache", "Cache-Control": "no-cache", "Content-Type": "application/json" },
  validateStatus: (status) => status < 400,
});

const axiosFetcher = (url: string) => api.get(url).then((res) => res.data);

const swrConfig = {
  fetcher: axiosFetcher,
  suspense: true,
  revalidateOnFocus: false,
  refreshInterval: 120000,
};

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 400) {
      // her kan vi legge feilkoder også som vi fra backend
      throw new HttpStatusCodeError(error.response?.status);
    }
    if (error.response?.status === 401 || error.response?.status === 403) {
      // Uinnlogget - vil ikke skje i miljø da appen er beskyttet
      return Promise.reject(error);
    }
    throw new ApiError("Issues with connection to backend");
  },
);

const fetchLoggedInUser = async () => {
  const response = await api.get<UserData>(`${authURL}`);
  return response.data;
};

const useFetchHasAccess = () => {
  const [groups, setGroups] = useState<Array<string>>([]);
  useEffect(() => {
    getAzureAdGroups()
      .then((adGroups) => setGroups(adGroups))
      .catch((error) => {
        throw new Error("Failed to load Azure AD groups:", error);
      });
  }, []);
  return (group: AzureAdGroupNames) => groups.some((id) => id === AzureAdGroupNameId[group]);
};

const RestService = {
  fetchLoggedInUser,
  useFetchHasAccess,
};

export default RestService;
