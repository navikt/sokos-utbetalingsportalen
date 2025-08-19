# Utbetalingsportalen

Container for å sette sammen ulike mikrofrontend som utgjør interne arbeidsflaten i nav som benyttes av økonomimedarbeidere, Nav Kontaktsenter m.fl.
Arbeidsflatene som tilbys gir mulighet til å se og/eller behandle saker som gjelder utbetaling av ytelser i Nav.

- [Utbetalingsportalen Q1-miljlø](https://utbetalingsportalen.intern.dev.nav.no)
- [Utbetalingsportalen QX-miljø](https://utbetalingsportalen-qx.intern.dev.nav.no)

### 📍 Hvordan legger til en mikrofrontend i Utbetalingsportalen?

- [Guide for å legge til React client-side mikrofrontend](dokumentasjon/react-mikrofrontend.md)
- [Guide for å legge til Astro server-side mikrofrontend](dokumentasjon/astro-mikrofrontend.md)

### 📍 Umami-taksonomi - Anebfaling og bruk av navngivning av Umami-hendelser og hendelsenes tilhørende detaljer

- [Umami-taksonomi](dokumentasjon/umami-taksonomi.md)

## Innholdsoversikt

- [1. Teknisk stack](#1-teknisk-stack)
- [2. Utviklingsmiljø](#2-utviklingsmiljø)
- [3. Programvarearkitektur](#3-programvarearkitektur)
- [4. Design](#4-design)
- [5. Deployment](#5-deployment)
- [6. Autentisering](#6-autentisering)
- [7. Drift og støtte](#7-drift-og-støtte)
- [8. Henvendelser](#8-henvendelser)

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

### Bygge prosjekt

- `pnpm install` for å installere avhengigheter

### Lokal utvikling

- `pnpm run mock` - Starter mock-server for lokal utvikling (Hvis du ønsker å gjøre kall til mock)
- `pnpm run dev` - Starter Astro dev-server (Kan kjøres uten `mock`)
- `pnpm run build` - Bygger prosjektet

## 3. Programvarearkitektur

[System diagram](dokumentasjon/system-diagram.md)

## 4. Design

Utkast til designguide for applikasjoner i Utbetalingsportalen

[Kjerneoppsett design](https://navno-my.sharepoint.com/:o:/g/personal/julie_utgard_nav_no/EtV6P-sYimZNsACTYqZmSbsBLeSlsvc6PP2svso_H09dZA?e=KSY5SO)

## 5. Deployment

Distribusjon av tjenesten er gjort med bruk av Github Actions.
[sokos-utbetalingsportalen CI / CD](https://github.com/navikt/sokos-utbetalingsportalen/actions)

Push/merge til main branch vil teste, bygge og deploye til dev- og prod miljø.
Det foreligger også mulighet for manuell deploy til dev.

## 6. Autentisering

Applikasjonen bruker SSO (Single Sign On) løsningen gjennom [Wonderwall](https://docs.nais.io/addons/wonderwall/?h=wonder).
Det benyttes også [OBO On-Behalf-Of](https://docs.nais.io/security/auth/azure-ad/usage/?h=behal#oauth-20-on-behalf-of-grant) for å gjøre kall til APIene bak mikrofrontendene.

## 7. Drift og støtte

### Logging

#### Grafana

- [sokos-utbetalingsportalen](https://grafana.nav.cloud.nais.io/d/6uYofme4z/sokos-utbetalingsportalen?orgId=1)

### Alarmer

Applikasjonen bruker [Grafana Alerting](https://grafana.nav.cloud.nais.io/alerting/) for overvåkning og varsling.
Dette er konfigurert via NAIS sin [alerting-integrasjon](https://doc.nais.io/observability/alerts).

Alarmene overvåker metrics som:

- HTTP-feilrater
- JVM-metrikker

Varsler blir sendt til følgende Slack-kanaler:

- Dev-miljø: [#team-mob-alerts-dev](https://nav-it.slack.com/archives/C042SF2FEQM)
- Prod-miljø: [#team-mob-alerts-prod](https://nav-it.slack.com/archives/C042ESY71GX)

## 8. Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på Github.
Interne henvendelser kan sendes via Slack i kanalen [#utbetaling](https://nav-it.slack.com/archives/CKZADNFBP)
