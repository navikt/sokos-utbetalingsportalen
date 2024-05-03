import { AzureAdGroupName, AzureAdGroupNames } from "../auth/azureAdGroups";
import RestService from "../services/rest-service";
import { ROUTE_PATH } from "./routePath";
const hasAccess = RestService.useFetchHasAccess();

export type AppNavn = "KRP" | "OPPDRAGSINFO" | "ORS" | "SKATTEKORT";

export type App = {
  app: AppNavn;
  title: string;
  description: string;
  group: AzureAdGroupNames;
  route: string;
};

export const Apper: Array<App> = [
  {
    app: "OPPDRAGSINFO",
    title: "Oppdragsinfo",
    description: "Søk etter oppdrag i Oppdragssystemet",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ,
    route: ROUTE_PATH.SOKOS_UP_OPPDRAGSINFO,
  },
  {
    app: "KRP",
    title: "Kontoregister person kontosøk",
    description: "Søk etter personer og konti",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_KRP_READ,
    route: ROUTE_PATH.SOKOS_UP_KRP,
  },
  {
    app: "ORS",
    title: "Oppslag i Reskontro Stønad",
    description: "Søk etter posteringer fra Abetal og UR",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ORS_READ,
    route: ROUTE_PATH.SOKOS_UP_ORS,
  },
  {
    app: "SKATTEKORT",
    title: "Skattekort",
    description: "Søk etter skattekort for personer i OS-Eskatt",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ,
    route: ROUTE_PATH.SOKOS_UP_SKATTEKORT,
  },
];

export const tilgang = Apper.filter((app) => hasAccess(app.group));
export const alle = [...tilgang, ...Apper.filter((app) => !hasAccess(app.group))];
