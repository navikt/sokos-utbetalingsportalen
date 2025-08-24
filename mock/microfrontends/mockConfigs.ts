import { generateMicrofrontend } from "./generateMicrofrontend";

export interface MockMicrofrontendConfig {
  name: string;
  title: string;
  description: string;
  color: string;
}

export const mockMicrofrontends: Record<string, MockMicrofrontendConfig> = {
  "sokos-up-attestasjon": {
    name: "attestasjon",
    title: "Attestasjon",
    description: "Attestering av oppdrag",
    color: "#0067C5",
  },
  "sokos-up-oppdragsinfo": {
    name: "oppdragsinfo",
    title: "Oppdragsinfo",
    description: "Søk etter oppdrag i Oppdragssystemet",
    color: "#06893A",
  },
  "sokos-up-fastedata": {
    name: "fastedata",
    title: "Faste data",
    description: "Oppslag og oversikt over gjeldende oppsettsregler",
    color: "#C30000",
  },
  "sokos-up-skattekort": {
    name: "skattekort",
    title: "Skattekort",
    description: "Administrasjon og oversikt over skattekort",
    color: "#634689",
  },
  "sokos-up-spk-mottak": {
    name: "spk-mottak",
    title: "SPK Mottak",
    description: "Mottak og behandling av SPK meldinger",
    color: "#FF7300",
  },
  "sokos-up-resending-bank": {
    name: "resending-bank",
    title: "Resending til bank",
    description: "Resending av meldinger til bank",
    color: "#BA3A01",
  },
  "sokos-up-krp": {
    name: "kontoregister-person",
    title: "Kontoregister person",
    description: "Administrasjon av personkonti",
    color: "#0A806C",
  },
  "sokos-up-kro": {
    name: "kontoregister-organisasjon",
    title: "Kontoregister organisasjon",
    description: "Administrasjon av organisasjonskonti",
    color: "#1A4480",
  },
  "sokos-up-utbetaling": {
    name: "utbetaling",
    title: "Utbetaling",
    description: "Administrasjon og oversikt over utbetalinger",
    color: "#A13FD9",
  },
  "sokos-up-buntkontroll": {
    name: "buntkontroll",
    title: "Buntkontroll",
    description: "Oversikt over bunter sendt til bank",
    color: "#D20A5C",
  },
  "sokos-up-meldingsflyt": {
    name: "meldingsflyt",
    title: "Meldingsflyt",
    description: "Oversikt over meldinger til og fra bank",
    color: "#7D2721",
  },
  "sokos-up-ors": {
    name: "oppslag-reskontro-stoenad",
    title: "Oppslag reskontro",
    description: "Oppslag i reskontro for stønadsområdet",
    color: "#4F3F26",
  },
  "sokos-up-dare": {
    name: "dare",
    title: "DARE POC",
    description: "Utkast av beregning av AAP",
    color: "#E18700",
  },
};

export interface LocalMicrofrontendConfig {
  port: number;
  path?: string;
  enabled: boolean;
}

export const localMicrofrontends: Record<string, LocalMicrofrontendConfig> = {
  "sokos-up-attestasjon": {
    port: 5173,
    path: "/attestasjon",
    enabled: true,
  },
  "sokos-up-oppdragsinfo": {
    port: 5174,
    path: "/oppdragsinfo",
    enabled: false,
  },
};

export function getMockBundle(microfrontendName: string): string {
  const config = mockMicrofrontends[microfrontendName];

  if (!config) {
    return generateMicrofrontend({
      name: microfrontendName,
      title: "Ukjent Microfrontend",
      description: `Mock ikke funnet for "${microfrontendName}"`,
      color: "#999999",
    });
  }

  return generateMicrofrontend(config);
}

export function getLocalMicrofrontendUrl(
  microfrontendName: string,
): string | null {
  const localConfig = localMicrofrontends[microfrontendName];
  if (!localConfig || !localConfig.enabled) {
    return null;
  }

  const path =
    localConfig.path || `/${microfrontendName.replace("sokos-up-", "")}`;
  return `http://localhost:${localConfig.port}${path}`;
}
