import { AzureAdGroupName, AzureAdGroupNames } from "./auth/azureAdGroups";
import { ROUTES } from "./routes/routes";
import {
  sokosMikrofrontendTemplateURL,
  sokosUpAttestasjonURL,
  sokosUpBuntkontrollURL,
  sokosUpKroURL,
  sokosUpKrpURL,
  sokosUpOppdragsinfoURL,
  sokosUpOrsURL,
  sokosUpResendingBankURL,
  sokosUpSkattekortURL,
  sokosUpUtbetalingURL,
  sokosUpVenteregisterURL,
} from "./urls";

export type MicrofrontendApp = {
  app: string;
  title: string;
  description: string;
  group: AzureAdGroupNames;
  route: string;
  url: string;
  onlyForDevelopment?: boolean;
};

export const Apps: Array<MicrofrontendApp> = [
  {
    app: "VENTEREGISTER",
    title: "Venteregister",
    description: "Venteregister for oppdrag",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_VENTEREGISTER_READ,
    route: ROUTES.SOKOS_UP_VENTEREGISTER,
    url: sokosUpVenteregisterURL,
  },
  {
    app: "ATTESTASJON",
    title: "Attestasjon",
    description: "Attestering av oppdrag",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ATTESTASJON_READ,
    route: ROUTES.SOKOS_UP_ATTESTASJON,
    url: sokosUpAttestasjonURL,
  },
  {
    app: "MIKROFRONTEND",
    title: "Grensesnittmal",
    description: "Dette er en blank mal for et grensesnitt",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ,
    route: ROUTES.SOKOS_MIKROFRONTEND_TEMPLATE,
    url: sokosMikrofrontendTemplateURL,
    onlyForDevelopment: true,
  },
  {
    app: "RESENDING_BANK",
    title: "Resending til bank",
    description: "Resending av meldinger til bank",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_RESENDING_BANK_READ,
    route: ROUTES.SOKOS_UP_RESENDING_BANK,
    url: sokosUpResendingBankURL,
  },
  {
    app: "KRP",
    title: "Kontoregister person",
    description: "Søk etter personer og konti",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_KRP_READ,
    route: ROUTES.SOKOS_UP_KRP,
    url: sokosUpKrpURL,
  },
  {
    app: "KRO",
    title: "Kontoregister organisasjon",
    description: "Søk etter kontonummer til organisasjoner",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_KRO_READ,
    route: ROUTES.SOKOS_UP_KRO,
    url: sokosUpKroURL,
  },
  {
    app: "OPPDRAGSINFO",
    title: "Oppdragsinfo",
    description: "Søk etter oppdrag i Oppdragssystemet",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ,
    route: ROUTES.SOKOS_UP_OPPDRAGSINFO,
    url: sokosUpOppdragsinfoURL,
  },
  {
    app: "ORS",
    title: "Oppslag i Reskontro Stønad",
    description: "Søk etter posteringer fra Abetal og UR",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ORS_READ,
    route: ROUTES.SOKOS_UP_ORS,
    url: sokosUpOrsURL,
  },
  {
    app: "SKATTEKORT",
    title: "Skattekort",
    description: "Søk etter skattekort for personer i OS-Eskatt",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ,
    route: ROUTES.SOKOS_UP_SKATTEKORT,
    url: sokosUpSkattekortURL,
  },
  {
    app: "UTBETALING",
    title: "Utbetaling",
    description: "Søk etter utbetalinger",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_UTBETALING_READ,
    route: ROUTES.SOKOS_UP_UTBETALING,
    url: sokosUpUtbetalingURL,
  },
  {
    app: "BUNTKONTROLL",
    title: "Buntkontroll",
    description: "Oversikt over bunter sendt til bank",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_BUNTKONTROLL_READ,
    route: ROUTES.SOKOS_UP_BUNTKONTROLL,
    url: sokosUpBuntkontrollURL,
  },
];
