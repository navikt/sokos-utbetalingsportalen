import { getEnvironment } from "../utils/environment";

function mikrofrontendUrl(appName: string) {
  if (getEnvironment() === "local") {
    return "/bundle.js";
  }
  return "https://" + window.location.hostname + "/" + appName + "/bundle.js";
}

function adGroup({
  adGroupDevelopment,
  adGroupProduction,
}: {
  adGroupDevelopment: string;
  adGroupProduction: string;
}) {
  return getEnvironment() === "production"
    ? adGroupProduction
    : adGroupDevelopment;
}

export function AzureAdGroupNameId(adGroup: string) {
  return MicrofrontendConfig.find((app) => app.group === adGroup)?.group;
}

export type MicrofrontendApp = {
  app: string;
  title: string;
  description: string;
  group: string;
  route: string;
  url: string;
  onlyLocalDev?: boolean;
};

export const MicrofrontendConfig: Array<MicrofrontendApp> = [
  {
    app: "MIKROFRONTEND",
    title: "Grensesnittmal",
    description: "Dette er en blank mal for et grensesnitt",
    group: adGroup({
      adGroupDevelopment: "1b717a23-d376-471c-9fc6-356299fadc2b",
      adGroupProduction: "",
    }),
    route: "/mikrofrontend",
    url: mikrofrontendUrl("sokos-mikrofrontend-template"),
    onlyLocalDev: true,
  },
  {
    app: "VENTEREGISTER",
    title: "Venteregister",
    description: "Venteregister for oppdrag",
    group: adGroup({
      adGroupDevelopment: "48a80bbb-be45-4ef6-aab8-21604f057f47",
      adGroupProduction: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    }),
    route: "/venteregister",
    url: mikrofrontendUrl("sokos-up-venteregister"),
  },
  {
    app: "ATTESTASJON",
    title: "Attestasjon",
    description: "Attestering av oppdrag",
    group: adGroup({
      adGroupDevelopment: "0de8d01f-8ad0-4391-841c-55392956bc17",
      adGroupProduction: "ae51bc06-2f9a-47a4-b33d-f0825ecb9985",
    }),
    route: "/attestasjon",
    url: mikrofrontendUrl("sokos-up-attestasjon"),
  },
  {
    app: "RESENDING_BANK",
    title: "Resending til bank",
    description: "Resending av meldinger til bank",
    group: adGroup({
      adGroupDevelopment: "391bec9e-e71e-42cb-a030-56c394dd13fd",
      adGroupProduction: "de776092-a8ed-46a2-be5e-ec2eae4dcf2b",
    }),
    route: "/resending-bank",
    url: mikrofrontendUrl("sokos-up-resending-bank"),
  },
  {
    app: "KRP",
    title: "Kontoregister person",
    description: "Oppslag og registrering av konti til personer",
    group: adGroup({
      adGroupDevelopment: "98146b9a-1891-44e3-9b61-92130c2fcd8b",
      adGroupProduction: "bb9c7baf-768b-4e84-816c-f10d0a6c7d25",
    }),
    route: "/kontoregister-person",
    url: mikrofrontendUrl("sokos-up-krp"),
  },
  {
    app: "KRO",
    title: "Kontoregister organisasjon",
    description: "Oppslag og registrering av konti til organisasjoner",
    group: adGroup({
      adGroupDevelopment: "bdcedce3-dab5-4b68-b1d3-8625cd0d3b55",
      adGroupProduction: "e1635067-dfc9-4fb8-8405-d50e9672cf5c",
    }),
    route: "/kontoregister-organisasjon",
    url: mikrofrontendUrl("sokos-up-kro"),
  },
  {
    app: "OPPDRAGSINFO",
    title: "Oppdragsinfo",
    description: "Søk etter oppdrag i Oppdragssystemet",
    group: adGroup({
      adGroupDevelopment: "e0023d91-26bc-4d5d-95ba-3148b6123afc",
      adGroupProduction: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    }),
    route: "/oppdragsinfo",
    url: mikrofrontendUrl("sokos-up-oppdragsinfo"),
  },
  {
    app: "ORS",
    title: "Oppslag i Reskontro Stønad",
    description: "Søk etter posteringer fra Abetal og UR",
    group: adGroup({
      adGroupDevelopment: "b01fb216-fcb3-4ede-b7da-71fffe859763",
      adGroupProduction: "25723642-e1da-4d15-87ce-8c4d2b87e33a",
    }),
    route: "/oppslag-reskontro-stoenad",
    url: mikrofrontendUrl("sokos-up-ors"),
  },
  {
    app: "SKATTEKORT",
    title: "Skattekort",
    description: "Søk etter skattekort for personer i OS-Eskatt",
    group: adGroup({
      adGroupDevelopment: "a13b4176-e328-4e1c-b181-ff676a7146b1",
      adGroupProduction: "6c93762e-ea37-4043-919f-3a758a136943",
    }),
    route: "/skattekort",
    url: mikrofrontendUrl("sokos-up-skattekort"),
  },
  {
    app: "SPK_MOTTAK",
    title: "SPK mottak",
    description: "Dashboard for å trigge jobber",
    group: adGroup({
      adGroupDevelopment: "0e58dc41-7c57-4b79-a8c7-d0caec129e53",
      adGroupProduction: "f49b797d-600d-46da-8061-7746e48d1aca",
    }),
    route: "/spk-mottak",
    url: mikrofrontendUrl("sokos-up-spk-mottak"),
  },
  {
    app: "UTBETALING",
    title: "Utbetaling",
    description: "Søk etter utbetalinger",
    group: adGroup({
      adGroupDevelopment: "138d21fb-4e96-46d6-91e4-e3926aa349e5",
      adGroupProduction: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    }),
    route: "/utbetaling",
    url: mikrofrontendUrl("sokos-up-utbetaling"),
  },
  {
    app: "BUNTKONTROLL",
    title: "Buntkontroll",
    description: "Oversikt over bunter sendt til bank",
    group: adGroup({
      adGroupDevelopment: "3bc37bf2-8e76-407c-ad4a-d2c79edc241e",
      adGroupProduction: "08723132-a7ba-40eb-a6f4-0a9247f230d2",
    }),
    route: "/buntkontroll",
    url: mikrofrontendUrl("sokos-up-buntkontroll"),
  },
  {
    app: "MELDINGSFLYT",
    title: "Meldingsflyt",
    description: "Oversikt over meldinger til og fra bank",
    group: adGroup({
      adGroupDevelopment: "2020a765-ffae-4042-b4cc-2a5a783a3ec5",
      adGroupProduction: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    }),
    route: "/meldingsflyt",
    url: mikrofrontendUrl("sokos-up-meldingsflyt"),
  },
];

/**
 * Forkortelser i URL er ikke en god idé. Det er bedre å bruke hele ord.
 * Bruk små bokstaver i URL.
 * Bruke bindestrek i URL for å skille på ord.
 * Ikke bruk Æ Ø Å. Skriv heller: Æ = AE, Ø = OE, Å = AA.
 **/
