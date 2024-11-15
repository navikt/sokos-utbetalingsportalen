import { AzureAdGroupName, AzureAdGroupNames } from "./auth/azureAdGroups";
import { getEnvironment } from "./utils/environment";

const url = (appName: string) => {
  if (getEnvironment() === "local") {
    return "/bundle.js";
  }
  return "https://" + window.location.hostname + "/" + appName + "/bundle.js";
};

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
    route: "/venteregister",
    url: url("sokos-up-venteregister"),
  },
  {
    app: "ATTESTASJON",
    title: "Attestasjon",
    description: "Attestering av oppdrag",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ATTESTASJON_READ,
    route: "/attestasjon",
    url: url("sokos-up-attestasjon"),
  },
  {
    app: "MIKROFRONTEND",
    title: "Grensesnittmal",
    description: "Dette er en blank mal for et grensesnitt",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ,
    route: "/mikrofrontend",
    url: url("sokos-mikrofrontend-template"),
    onlyForDevelopment: true,
  },
  {
    app: "RESENDING_BANK",
    title: "Resending til bank",
    description: "Resending av meldinger til bank",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_RESENDING_BANK_READ,
    route: "/resending-bank",
    url: url("sokos-up-resending-bank"),
  },
  {
    app: "KRP",
    title: "Kontoregister person",
    description: "Søk etter personer og konti",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_KRP_READ,
    route: "/kontoregister-person",
    url: url("sokos-up-krp"),
  },
  {
    app: "KRO",
    title: "Kontoregister organisasjon",
    description: "Søk etter kontonummer til organisasjoner",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_KRO_READ,
    route: "/kontoregister-organisasjon",
    url: url("sokos-up-kro"),
  },
  {
    app: "OPPDRAGSINFO",
    title: "Oppdragsinfo",
    description: "Søk etter oppdrag i Oppdragssystemet",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ,
    route: "/oppdragsinfo",
    url: url("sokos-up-oppdragsinfo"),
  },
  {
    app: "ORS",
    title: "Oppslag i Reskontro Stønad",
    description: "Søk etter posteringer fra Abetal og UR",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ORS_READ,
    route: "/oppslag-reskontro-stoenad",
    url: url("sokos-up-ors"),
  },
  {
    app: "SKATTEKORT",
    title: "Skattekort",
    description: "Søk etter skattekort for personer i OS-Eskatt",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ,
    route: "/skattekort",
    url: url("sokos-up-skattekort"),
  },
  {
    app: "SPK_MOTTAK",
    title: "SPK mottak",
    description: "Dashboard for å trigge jobber",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SPK_MOTTAK_READ,
    route: "/spk-mottak",
    url: url("sokos-up-spk-mottak"),
  },
  {
    app: "UTBETALING",
    title: "Utbetaling",
    description: "Søk etter utbetalinger",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_UTBETALING_READ,
    route: "/utbetaling",
    url: url("sokos-up-utbetaling"),
  },
  {
    app: "BUNTKONTROLL",
    title: "Buntkontroll",
    description: "Oversikt over bunter sendt til bank",
    group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_BUNTKONTROLL_READ,
    route: "/buntkontroll",
    url: url("sokos-up-buntkontroll"),
  },
];

/**
 * Forkortelser i URL er ikke en god idé. Det er bedre å bruke hele ord.
 * Bruk små bokstaver i URL.
 * Bruke bindestrek i URL for å skille på ord.
 * Ikke bruk Æ Ø Å. Skriv heller: Æ = AE, Ø = OE, Å = AA.
 **/
