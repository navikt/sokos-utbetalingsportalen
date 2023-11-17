# sokos-op-fasade

Hovedcontainer som setter sammen mikrofrontends.
For å hekte på en mikrofrontend sjekk dokumentasjonen [her](dokumentasjon/mikrofrontend.md)

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

Okonomiportalen er arbeidsflaten for okonomi medarbeidere i Økonomi linjen i NAV.

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
[sokos-op-fasade CI / CD](https://github.com/navikt/sokos-op-fasade/actions)

Push/merge til master branch vil teste, bygge og deploye til dev- og prod miljø.
Det foreligger også mulighet for manuell deploy til dev.

# 7. Autentiseringg

# 6. Drift og støtte

### Logging

### Alarmer

Vi bruker [nais-alerts](https://doc.nais.io/observability/alerts) for å sette opp alarmer. Disse finner man konfigurert i [.nais mappen](.nais).

### Grafana

- [appavn](url)

# 7. Henvendelser og tilgang

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på Github.
Interne henvendelser kan sendes via Slack i kanalen #po-utbetaling
