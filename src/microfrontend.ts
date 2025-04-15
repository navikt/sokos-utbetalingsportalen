type MicroFrontend = {
  app: string;
  title: string;
  description: string;
  adGroupDevelopment: string;
  adGroupProduction: string;
  route: string;
  naisAppName: string;
};

type MicrofrontendDictionary = Record<string, MicroFrontend>;

export const microfrontendConfigArray: MicroFrontend[] = [
  {
    app: "ATTESTASJON",
    title: "Attestasjon",
    description: "Attestering av oppdrag",
    adGroupDevelopment: "0de8d01f-8ad0-4391-841c-55392956bc17",
    adGroupProduction: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    route: "/attestasjon",
    naisAppName: "sokos-up-attestasjon",
  },
  {
    app: "OPPDRAGSINFO",
    title: "Oppdragsinfo",
    description: "Søk etter oppdrag i Oppdragssystemet",
    adGroupDevelopment: "e0023d91-26bc-4d5d-95ba-3148b6123afc",
    adGroupProduction: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    route: "/oppdragsinfo",
    naisAppName: "sokos-up-oppdragsinfo",
  },
  {
    app: "VENTEREGISTER",
    title: "Venteregister",
    description: "En beskrivelse",
    adGroupDevelopment: "48a80bbb-be45-4ef6-aab8-21604f057f47",
    adGroupProduction: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    route: "/venteregister",
    naisAppName: "sokos-up-venteregister",
  },
  {
    app: "FASTEDATA",
    title: "Fastedata",
    description: "En beskrivelse",
    adGroupDevelopment: "7e0c2ad1-d0e7-4fa8-8169-7a9d68435644",
    adGroupProduction: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    route: "/fastedata",
    naisAppName: "sokos-up-fastedata",
  },
  {
    app: "GRENSESNITTMAL",
    title: "Grensesnittmal",
    description: "Dette er en blank mal for et grensesnitt",
    adGroupDevelopment: "1b717a23-d376-471c-9fc6-356299fadc2b",
    adGroupProduction: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    route: "/grensesnittmal",
    naisAppName: "sokos-mikrofrontend-template",
  },
  {
    app: "RESENDING-BANK",
    title: "Resending til bank",
    description: "Resending av meldinger til bank",
    adGroupDevelopment: "391bec9e-e71e-42cb-a030-56c394dd13fd",
    adGroupProduction: "de776092-a8ed-46a2-be5e-ec2eae4dcf2b",

    route: "/resending-bank",
    naisAppName: "sokos-up-resending-bank",
  },
  {
    app: "KRP",
    title: "Kontoregister person",
    description: "Oppslag og registrering av konti til personer",
    adGroupDevelopment: "98146b9a-1891-44e3-9b61-92130c2fcd8b",
    adGroupProduction: "bb9c7baf-768b-4e84-816c-f10d0a6c7d25",
    route: "/kontoregister-person",
    naisAppName: "sokos-up-krp",
  },
  {
    app: "KRO",
    title: "Kontoregister organisasjon",
    description: "Oppslag og registrering av konti til organisasjoner",
    adGroupDevelopment: "bdcedce3-dab5-4b68-b1d3-8625cd0d3b55",
    adGroupProduction: "e1635067-dfc9-4fb8-8405-d50e9672cf5c",
    route: "/kontoregister-organisasjon",
    naisAppName: "sokos-up-kro",
  },
];

/**
 * Creates a dictionary of page configurations indexed by lowercase app name
 * @param pages Array of page configurations
 * @returns Dictionary with page configs accessible by lowercase app name
 */
function createMicrofrontendConfig(
  pages: MicroFrontend[],
): MicrofrontendDictionary {
  return Object.fromEntries(
    pages.map((page) => [page.app.toLowerCase(), page]),
  ) as MicrofrontendDictionary;
}

/**
 * Dictionary of page configurations, accessible by lowercase app name
 * Example: pagesConfig.attestasjon
 */
const microfrontendConfig: MicrofrontendDictionary = createMicrofrontendConfig(
  microfrontendConfigArray,
);

/**
 * Gets a page configuration by app name (case insensitive)
 * @param appName The name of the app to get config for
 * @returns The page configuration
 */
export function getMicrofrontendConfig(appName: string): MicroFrontend {
  return microfrontendConfig[appName.toLowerCase()];
}
