export const ROUTE_PATH = {
  SOKOS_UP_HOME: "/",
  SOKOS_UP_ATTESTASJON: "/attestasjon",
  SOKOS_MIKROFRONTEND_TEMPLATE: "/mikrofrontend",
  SOKOS_UP_ORS: "/oppslag-reskontro-stønad",
  SOKOS_UP_SKATTEKORT: "/skattekort",
  SOKOS_UP_OPPDRAGSINFO: "/oppdragsinfo",
  SOKOS_UP_KRP: "/kontoregister-person",
  SOKOS_UP_RESENDING_BANK: "/resending-bank",
  SOKOS_UP_KRO: "/kontoregister-organisasjon",
  SOKOS_UP_UTBETALING: "/utbetaling",
  SOKOS_UP_BUNTKONTROLL: "/buntkontroll",
} as const;

/**
 * Forkortelser i URL er ikke en god idé. Det er bedre å bruke hele ord.
 * Bruk små bokstaver i URL.
 * Bruke bindestrek i URL for å skille på ord.
 **/
