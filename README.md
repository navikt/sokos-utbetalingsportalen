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

# 7. Autentisering

Prosjektet er implementert med [OpenID Connect AzureAD](https://docs.nais.io/security/auth/azure-ad/usage/#openid-connect-authorization-code-flow)
med [sidecar](https://docs.nais.io/security/auth/azure-ad/sidecar/) løsning.
Alle mikfrofrontends snakker med sitt eget API (backend). Fasaden innhenter disse mikrofrontendene og når mikrofrontend
gjør et kall til sitt eget API gjøres dette ved å sende et proxy kall fra mikrofrontend til fasaden slik at fasaden kan
gjøre en kall på vegne av den mikfrofrontenden. Da er det behov for OBO-token som fasaden henter inn for den
saksbehandleren som er logget slik at fasaden kan gjøre api kallet til mikrofrontenden sin backend på vegne av den.
Økonomiportalen har en rollebasert styring. Fasaden sjekker kun følgende om saksbehandler har tilgang til
Økonomiportalen og på hvilken mikrofrontend saksbehandleren har tilgang til. Resten av tilgangene som f.eks kode 6/7,
enhet 8020, 4819 og 999 og andre tilganger er det hver mikrofrontend sin backend sitt ansvar å sjekke for å se hva
saksbehandler kan gjøre på dets skjermbildet. Se [System diagram](dokumentasjon/system-diagram.md) for visualisering av hvordan hele flyten foregår.

# 6. Drift og støtte

### Logging

### Alarmer

Vi bruker [nais-alerts](https://doc.nais.io/observability/alerts) for å sette opp alarmer. Disse finner man konfigurert i [.nais mappen](.nais).

### Grafana

- [appavn](url)

# 7. Henvendelser og tilgang

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på Github.
Interne henvendelser kan sendes via Slack i kanalen #po-utbetaling
