import { ExoticComponent, ReactNode } from "react";
import { AzureAdGroupName, AzureAdGroupNames } from "../auth/azureAdGroups";
import { ROUTE_PATH } from "./routePath";
import { BulletListIcon, NewspaperIcon, TableIcon } from "@navikt/aksel-icons";

export type AppNavn = "KRP" | "OPPDRAGSINFO" | "ORS" | "SKATTEKORT";

export type App = {
  app: AppNavn;
  title: string;
  description: string;
  group: AzureAdGroupNames;
  route: string;
  ikonet: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & SVGRProps & React.RefAttributes<SVGSVGElement>
  >;
};

export const Apper: Array<App> = [
  {
    app: "KRP",
    title: "Kontoregister person kontosøk",
    description: "Søk etter personer og konti",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_KRP_READ,
    route: ROUTE_PATH.SOKOS_UP_KRP,
    ikonet: BulletListIcon,
  },
  {
    app: "OPPDRAGSINFO",
    title: "Oppdragsinfo",
    description: "Søk etter oppdrag i Oppdragssystemet",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ,
    route: ROUTE_PATH.SOKOS_UP_OPPDRAGSINFO,
    ikonet: NewspaperIcon,
  },
  {
    app: "ORS",
    title: "Oppslag i Reskontro Stønad",
    description: "Søk etter posteringer fra Abetal og UR",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ORS_READ,
    route: ROUTE_PATH.SOKOS_UP_ORS,
    ikonet: TableIcon,
  },
  {
    app: "SKATTEKORT",
    title: "Skattekort",
    description: "Søk etter skattekort for personer i OS-Eskatt",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ,
    route: ROUTE_PATH.SOKOS_UP_SKATTEKORT,
    ikonet: BulletListIcon,
  },
];
