import axios from "axios";
import { UserData } from "../models/userData";
import { ApiError, HttpStatusCodeError } from "../types/errors";
import { authURL } from "../urls";

const api = axios.create({
  timeout: 30000,
  withCredentials: true,
  headers: {
    Pragma: "no-cache",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status < 400,
});

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

const RestService = {
  fetchLoggedInUser,
};

export default RestService;
