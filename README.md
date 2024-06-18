# Utbetalingsportalen

## Innholdsoversikt

- [1. Funksjonelle krav](#1-funksjonelle-krav)
- [2. Utviklingsmiljø](#2-utviklingsmiljø)
- [3. Programvarearkitektur](#3-programvarearkitektur)
- [4. Legg til en mikrofrontend](#4-legg-til-en-mikrofrontend)
- [5. Deployment](#5-deployment)
- [6. Autentisering](#6-autentisering)
- [7. Drift og støtte](#7-drift-og-støtte)
- [8. Henvendelser](#8-henvendelser)

---

## 1. Funksjonelle Krav

Utbetalingsportalen er en intern arbeidsflate for Økonomi-medarbeidere i Økonomi linjen i NAV.

## 2. Utviklingsmiljø

### Forutsetninger

- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/) `npm install -g pnpm`

### Bygge prosjekt

- `pnpm install` for å installere avhengigheter

### Lokal utvikling

- `pnpm run dev`

## 3. Programvarearkitektur

[System diagram](dokumentasjon/system-diagram.md)

### 4. Legg til en mikrofrontend

[Guide](dokumentasjon/mikrofrontend.md)

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
