import { AzureAdGroupName, AzureAdGroupNames } from "../auth/azureAdGroups";
import {
  sokosMikrofrontendTemplateURL,
  sokosUpAttestasjonURL,
  sokosUpKrpURL,
  sokosUpOppdragsinfoURL,
  sokosUpOrsURL,
  sokosUpResendingBankURL,
  sokosUpSkattekortURL,
} from "../urls";
import { ROUTE_PATH } from "./routePath";

export type App = {
  app: string;
  title: string;
  description: string;
  group: AzureAdGroupNames;
  route: string;
  url: string;
  onlyForDevelopment?: boolean;
};

export const Apps: Array<App> = [
  {
    app: "ATTESTASJON",
    title: "Attestasjon",
    description: "Attestering av oppdrag",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ATTESTASJON_READ,
    route: ROUTE_PATH.SOKOS_UP_ATTESTASJON,
    url: sokosUpAttestasjonURL,
  },
  {
    app: "MIKROFRONTEND",
    title: "Grensesnittmal",
    description: "Dette er en blank mal for et grensesnitt",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ,
    route: ROUTE_PATH.SOKOS_MIKROFRONTEND_TEMPLATE,
    url: sokosMikrofrontendTemplateURL,
    onlyForDevelopment: true,
  },
  {
    app: "RESENDING_BANK",
    title: "Resending til bank",
    description: "Resending av meldinger til bank",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_RESENDING_BANK_READ,
    route: ROUTE_PATH.SOKOS_UP_RESENDING_BANK,
    url: sokosUpResendingBankURL,
  },
  {
    app: "KRP",
    title: "Kontoregister person kontosøk",
    description: "Søk etter personer og konti",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_KRP_READ,
    route: ROUTE_PATH.SOKOS_UP_KRP,
    url: sokosUpKrpURL,
  },
  {
    app: "OPPDRAGSINFO",
    title: "Oppdragsinfo",
    description: "Søk etter oppdrag i Oppdragssystemet",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ,
    route: ROUTE_PATH.SOKOS_UP_OPPDRAGSINFO,
    url: sokosUpOppdragsinfoURL,
  },
  {
    app: "ORS",
    title: "Oppslag i Reskontro Stønad",
    description: "Søk etter posteringer fra Abetal og UR",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ORS_READ,
    route: ROUTE_PATH.SOKOS_UP_ORS,
    url: sokosUpOrsURL,
  },
  {
    app: "SKATTEKORT",
    title: "Skattekort",
    description: "Søk etter skattekort for personer i OS-Eskatt",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ,
    route: ROUTE_PATH.SOKOS_UP_SKATTEKORT,
    url: sokosUpSkattekortURL,
  },
];
