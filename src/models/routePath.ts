export const ROUTE_PATH = {
  SOKOS_UP_HOME: "/",
  SOKOS_UP_ATTESTASJON: "/attestasjon",
  SOKOS_MIKROFRONTEND_TEMPLATE: "/mikrofrontend",
  SOKOS_UP_ORS: "/ors",
  SOKOS_UP_SKATTEKORT: "/skattekort",
  SOKOS_UP_OPPDRAGSINFO: "/oppdragsinfo",
  SOKOS_UP_KRP: "/krp",
  SOKOS_UP_RESENDING_BANK: "/resending-bank",
  SOKOS_UP_KRO: "/kontoregister-organisasjon",
} as const;

// NB! Forkortelser i URL er ikke en god idé. Det er bedre å bruke hele ord.
// NB! Det er en god idé å bruke små bokstaver i URL.
// NB! Det er en god idé å bruke bindestrek i URL for å skille på ord.
