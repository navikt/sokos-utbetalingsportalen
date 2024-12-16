# Utbetalingsportalen

Container for å sette sammen ulike mikrofrontend som utgjør interne arbeidsflaten i nav som benyttes av økonomimedarbeidere, Nav Kontaktsenter m.fl.
Arbeidsflatene som tilbys gir mulighet til å se og/eller behandle saker som gjelder utbetaling av ytelser i Nav.

[Q1-miljl](https://utbetalingsportalen.intern.dev.nav.no)
[Qx-miljø](https://utbetalingsportalen-qx.intern.dev.nav.no)

## Innholdsoversikt

- [1. Utviklingsmiljø](#2-utviklingsmiljø)
- [2. Programvarearkitektur](#3-programvarearkitektur)
- [3. Legg til en mikrofrontend](#4-legg-til-en-mikrofrontend)
- [4. Design](#5-design)
- [5. Deployment](#6-deployment)
- [6. Autentisering](#7-autentisering)
- [7. Drift og støtte](#8-drift-og-støtte)
- [8. Henvendelser](#9-henvendelser)

---

## 1. Utviklingsmiljø

### Forutsetninger

- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/) `npm install -g pnpm`

### Bygge prosjekt

- `pnpm install` for å installere avhengigheter

### Lokal utvikling

- `pnpm run dev` Bruker [Mock Service Worker](https://mswjs.io/)

## 2. Programvarearkitektur

[System diagram](dokumentasjon/system-diagram.md)

## 3. Legg til en mikrofrontend

[Guide for å hekte på en ny mikrofrontend](dokumentasjon/mikrofrontend.md)

## 4. Design

Utkast til designguide for applikasjoner i Utbetalingsportalen:
[Kjerneoppsett design](https://navno-my.sharepoint.com/:o:/g/personal/julie_utgard_nav_no/EtV6P-sYimZNsACTYqZmSbsBLeSlsvc6PP2svso_H09dZA?e=KSY5SO)

## 5. Deployment

Distribusjon av tjenesten er gjort med bruk av Github Actions.
[sokos-utbetalingsportalen CI / CD](https://github.com/navikt/sokos-utbetalingsportalen/actions)

Push/merge til main branch vil teste, bygge og deploye til dev- og prod miljø.
Det foreligger også mulighet for manuell deploy til dev.

## 6. Autentisering

Applikasjonen bruker SSO -(Single Sign On) løsningen gjennom [Wonderwall](https://docs.nais.io/addons/wonderwall/?h=wonder).
Det benyttes også [OBO- On-Behalf-Of](https://docs.nais.io/security/auth/azure-ad/usage/?h=behal#oauth-20-on-behalf-of-grant) for å gjøre kall til APIene bak mikrofrontendene.

## 7. Drift og støtte

### Logging

#### Grafana

- [sokos-utbetalingsportalen](https://grafana.nav.cloud.nais.io/d/6uYofme4z/sokos-utbetalingsportalen?orgId=1)

### Alarmer

Vi bruker [nais-alerts](https://doc.nais.io/observability/alerts) for å sette opp alarmer. Disse finner man konfigurert i [.nais mappen](.nais).

## 8. Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på Github.
Interne henvendelser kan sendes via Slack i kanalen #po-utbetaling
