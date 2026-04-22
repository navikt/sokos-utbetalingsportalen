# Utbetalingsportalen

Container for å sette sammen ulike mikrofrontends/applikasjoner som tilsammen utgjør et internt saksbehandlingssystem. Benyttes av økonomimedarbeidere, Nav Kontaktsenter m.fl. for å se eller behandle saker som gjelder utbetaling av ytelser i Nav.

- [Utbetalingsportalen Q1-miljø](https://utbetalingsportalen.intern.dev.nav.no)
- [Utbetalingsportalen QX-miljø](https://utbetalingsportalen-qx.intern.dev.nav.no)
- [Utbetalingsportalen Prod-miljø](https://utbetalingsportalen.intern.nav.no)

## Innholdsoversikt

- [1. Teknisk stack](#1-teknisk-stack)
- [2. Utviklingsmiljø](#2-utviklingsmiljø)
- [3. Programvarearkitektur](#3-programvarearkitektur)
- [4. Design](#4-design)
- [5. Deployment](#5-deployment)
- [6. Autentisering](#6-autentisering)
- [7. Guider og dokumentasjon](#7-guider-og-dokumentasjon)
- [8. Drift og støtte](#8-drift-og-støtte)
- [9. Henvendelser](#9-henvendelser)

---

## 1. Teknisk stack

- [Astro](https://astro.build/)
- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Aksel](https://aksel.nav.no/) - NAVs designsystem

## 2. Utviklingsmiljø

### Forutsetninger

- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/) `npm install -g pnpm`

### Installasjon og bygg

- `pnpm install` - Installerer avhengigheter
- `pnpm run build` - Bygger prosjektet

### Lokal utvikling

- `pnpm run dev` - Starter applikasjonen uten `mock`-server
- `pnpm run dev:mock` - Starter applikasjonen med `mock`-server

#### Kjøre mikrofrontend lokalt

For å kjøre en eller flere mikrofrontender lokalt sammen med Utbetalingsportalen:

1. **Start alt samtidig**: `pnpm run dev:mock`
   - Dette starter både Utbetalingsportalen (port 4321) og mock-serveren (port 3000)

2. **Start din mikrofrontend** på konfigurert port (se `mock/server.ts` for portnummer)

Mock-serveren sjekker automatisk om en lokal mikrofrontend kjører og laster den via iframe. Hvis den lokale mikrofrontenden ikke er tilgjengelig, vises en mock-komponent i stedet.

**Satt opp for lokal kjøring:**

- `sokos-up-attestasjon`: `http://localhost:5173/attestasjon`
- `sokos-up-oppdragsinfo`: `http://localhost:5174/oppdragsinfo`

For å legge til flere lokale mikrofrontends, oppdater `localMicrofrontends`-objektet i `mock/server.ts`.

## 3. Programvarearkitektur

[System diagram](dokumentasjon/system-diagram.md)

### Konfigurasjon av mikrofrontends

Alle mikrofrontends er konfigurert i [src/config/appConfig.ts](src/config/appConfig.ts). Her defineres:

- App navn og metadata (tittel, beskrivelse)
- AD-grupper for tilgangskontroll (dev/prod)
- Routing
- NAIS app-navn

## 4. Design

Utkast til designguide for applikasjoner i Utbetalingsportalen

[Kjerneoppsett design](https://navno-my.sharepoint.com/:o:/g/personal/julie_utgard_nav_no/EtV6P-sYimZNsACTYqZmSbsBLeSlsvc6PP2svso_H09dZA?e=KSY5SO)

## 5. Deployment

Distribusjon av tjenesten er gjort med bruk av Github Actions.
[sokos-utbetalingsportalen CI / CD](https://github.com/navikt/sokos-utbetalingsportalen/actions)

Push/merge til main branch vil teste, bygge og deploye til dev- og prod miljø.
Det foreligger også mulighet for manuell deploy til dev.

## 6. Autentisering

Applikasjonen bruker SSO (Single Sign-On) gjennom [Wonderwall](https://docs.nais.io/addons/wonderwall/?h=wonder). API-kall til backend-tjenester sikres med [OBO (On-Behalf-Of)](https://docs.nais.io/security/auth/azure-ad/usage/?h=behal#oauth-20-on-behalf-of-grant)-tokens.

## 7. Guider og dokumentasjon

### Mikrofrontend-guider

| Type | Template | Guide |
|------|----------|-------|
| React (client-side) | [sokos-react-template](https://github.com/navikt/sokos-react-template) | [Guide for React mikrofrontend](dokumentasjon/react-mikrofrontend.md) |
| Astro (server-side) | [sokos-astro-template](https://github.com/navikt/sokos-astro-template) | [Guide for Astro mikrofrontend](dokumentasjon/astro-mikrofrontend.md) |

### Umami-taksonomi

Anbefaling og bruk av navngivning av Umami-hendelser og tilhørende detaljer på tvers av arbeidsflatene.

[Umami-taksonomi](dokumentasjon/umami-taksonomi.md)

### Nanostores

Guide for deling av state mellom mikrofrontends via `sessionStorage`.

[Nanostores guide](dokumentasjon/nanostores.md)

## 8. Drift og støtte

### Logging

#### Grafana

- [sokos-utbetalingsportalen](https://grafana.nav.cloud.nais.io/d/6uYofme4z/sokos-utbetalingsportalen?orgId=1)

### Alarmer

Applikasjonen bruker [Grafana Alerting](https://grafana.nav.cloud.nais.io/alerting/) for overvåkning og varsling, konfigurert via NAIS sin [alerting-integrasjon](https://doc.nais.io/observability/alerts).

Alarmene overvåker:

- HTTP-feilrater
- JVM-metrikker

Varsler sendes til disse Slack kanalene:

- Dev-miljø: [#team-mob-alerts-dev](https://nav-it.slack.com/archives/C042SF2FEQM)
- Prod-miljø: [#team-mob-alerts-prod](https://nav-it.slack.com/archives/C042ESY71GX)

## 9. Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på Github.
Interne henvendelser kan sendes via Slack i kanalen [#utbetaling](https://nav-it.slack.com/archives/CKZADNFBP).
