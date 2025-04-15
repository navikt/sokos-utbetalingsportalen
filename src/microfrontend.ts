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
