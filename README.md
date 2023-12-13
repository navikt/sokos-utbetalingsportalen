# sokos-up-container

Hovedcontainer som setter sammen mikrofrontends.
For å hekte på en mikrofrontend ta kontakt med `#team-mob`

# Innholdsoversikt

- [1. Funksjonelle krav](#1-funksjonelle-krav)
- [2. Utviklingsmiljø](#2-utviklingsmiljø)
- [3. Programvarearkitektur](#3-programvarearkitektur)
- [4. Deployment](#4-deployment)
- [5. Autentisering](#5-autentisering)
- [6. Drift og støtte](#6-drift-og-støtte)
- [7. Henvendelser](#7-henvendelser)

---

# 1. Funksjonelle Krav

Utbetalingsportalen er arbeidsflaten for okonomi medarbeidere i Økonomi linjen i NAV.

# 2. Utviklingsmiljø

### Forutsetninger

- Node.js
- pnpm `npm install -g pnpm`

### Bygge prosjekt

- `pnpm install` for å installere avhengigheter

### Lokal utvikling

- `pnpm run dev`

# 3. Programvarearkitektur

[System diagram](dokumentasjon/system-diagram.md)

# 4. Deployment

Distribusjon av tjenesten er gjort med bruk av Github Actions.
[sokos-up-container CI / CD](https://github.com/navikt/sokos-up-container/actions)

Push/merge til main branch vil teste, bygge og deploye til dev- og prod miljø.
Det foreligger også mulighet for manuell deploy til dev.

# 7. Autentisering

Applikasjonen bruker SSO -(Single Sign On) løsningen gjennom [Wonderwall](https://docs.nais.io/addons/wonderwall/?h=wonder).
Det benyttes også [OBO- On-Behalf-Of](https://docs.nais.io/security/auth/azure-ad/usage/?h=behal#oauth-20-on-behalf-of-grant) for å gjøre kall til API bak mikrofrontendene.

# 6. Drift og støtte

### Logging

Logging går til [Grafana for frontend](https://grafana.nav.cloud.nais.io/d/6uYofme4z/sokos-up-container?orgId=1)

### Alarmer

Vi bruker [nais-alerts](https://doc.nais.io/observability/alerts) for å sette opp alarmer. Disse finner man konfigurert i [.nais mappen](.nais).

### Grafana

- [sokos-up-container](https://grafana.nav.cloud.nais.io/d/6uYofme4z/sokos-up-container?orgId=1)

# 7. Henvendelser og tilgang

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på Github.
Interne henvendelser kan sendes via Slack i kanalen #po-utbetaling
