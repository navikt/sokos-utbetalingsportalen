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

- `pnpm run dev` - Starter applikasjonen + mikrofrontend-`mock`-serveren, uten docker/Wonderwall (syntetisk lokal bruker automatisk)
- `pnpm run dev:mock` - Starter alt: docker-stack (mock-oauth2-server + Wonderwall) + applikasjonen + `mock`-server (mikrofrontend-bundles), for å teste ekte innlogging (se «Teste innlogging lokalt»)

#### Kjøre mikrofrontend lokalt

For å kjøre en eller flere mikrofrontender lokalt sammen med Utbetalingsportalen:

1. Sett `LOCAL_MICROFRONTENDS` i `.env.template`, med `naisAppName=port` for
   hver mikrofrontend du kjører lokalt. Legg til flere ved å komma-separere
   dem:

   ```bash
   LOCAL_MICROFRONTENDS=sokos-up-attestasjon=5173,sokos-up-oppdragsinfo=5174
   ```

   Bruk en egen, ledig port per mikrofrontend — ikke gjenbruk samme port for
   flere apper, og unngå porter som allerede er i bruk i dette repoet
   (`4321` Astro, `3000` Wonderwall, `3001` mock-serveren, `8080`
   mock-oauth2-server).

   Alternativt kan du sette variabelen inline foran kommandoen, uten å
   endre `.env.template` — nyttig for en rask engangstest:

   ```bash
   LOCAL_MICROFRONTENDS=sokos-up-attestasjon=5173 pnpm dev
   ```

2. **Start alt samtidig**: `pnpm run dev` (eller `pnpm run dev:mock` for å teste ekte innlogging)
   - Dette starter både Utbetalingsportalen (port 4321) og mock-serveren (port 3001)

3. **Start hver mikrofrontend** (i sin egen mappe/terminal) på porten du satte
   i `LOCAL_MICROFRONTENDS`

Mock-serveren sjekker automatisk om en lokal mikrofrontend kjører og laster den via iframe. Hvis den lokale mikrofrontenden ikke er tilgjengelig (eller ikke er satt opp i `LOCAL_MICROFRONTENDS`), vises en mock-komponent i stedet.

`naisAppName` og `route` hentes automatisk fra `src/config/appConfig.ts` — du
trenger bare oppgi porten. Alle apper i `appConfig.ts` kan brukes, ingen
kodeendring i `mock/server.ts` nødvendig.

#### Teste innlogging lokalt

Lokal innlogging bruker
[mock-oauth2-server](https://github.com/navikt/mock-oauth2-server) som
OIDC-provider og Wonderwall som lokal BFF. Dette er kun for lokal utvikling.

`.env.template` i repo-roten er sjekket inn i git (ingen hemmeligheter) og
inneholder all nødvendig lokal konfigurasjon, inkludert:

```bash
LOCAL_AUTH_PROXY_ENABLED=true
LOCAL_AUTH_PROXY_URL=http://localhost:3000
AZURE_APP_CLIENT_ID=local-client
AZURE_OPENID_CONFIG_ISSUER=http://localhost:8080/default
AZURE_OPENID_CONFIG_JWKS_URI=http://localhost:8080/default/jwks
ALLOWED_ORIGINS=http://localhost:4321,http://localhost:4322,http://localhost:3000
```

`ALLOWED_ORIGINS` styrer hvilke origins mock-serveren (`mock/server.ts`)
tillater CORS-forespørsler fra. Legg til eller fjern porter her — ingen
kodeendring nødvendig.

Start alt (docker-stack + Astro + mock-server) med:

```bash
pnpm dev:mock
```

Åpne `http://localhost:3000`. Innlogging skjer automatisk uten login-skjema
(`interactiveLogin` er satt til `false`). Mock-tokenet inneholder syntetiske
claims for `Ola Mohammed`, `Z123456` og AD-gruppene fra `mock/auth/adGroups.ts`
(delt kilde for både `pnpm dev` og `pnpm dev:mock`).
`mock/auth/mock-oauth-config.json` genereres automatisk av `pnpm dev:mock`
(`mock/auth/generate-oauth-config.ts`) og er ikke sjekket inn i git.

Logg ut ved å åpne `http://localhost:3000/oauth2/logout`.

Astro må nås gjennom Wonderwall på port `3000`; port `4321` er upstream-porten.
`LOCAL_AUTH_PROXY_ENABLED` virker bare når `NAIS_CLUSTER_NAME` ikke er
`dev-gcp` eller `prod-gcp`. I dev-gcp og prod-gcp brukes alltid
Nais-autentisering. Kjører du `pnpm dev` (uten docker-stacken), får du en
syntetisk lokal bruker automatisk (se `mock/auth/devUser.ts`).

Wonderwall bruker en fast lokal krypteringsnøkkel
(`WONDERWALL_ENCRYPTION_KEY`) slik at sesjonen overlever restart av
containeren under utvikling. Denne nøkkelen skal aldri brukes utenfor lokalt
miljø.

Stopp tjenestene:

```bash
pnpm dev:mock:down
```

**Se logger** hvis noe ikke fungerer som forventet:

```bash
docker compose logs -f wonderwall            # Wonderwall (BFF/proxy)
docker compose logs -f mock-oauth2-server     # OIDC-provider
docker compose logs -f wonderwall mock-oauth2-server  # begge samtidig
```

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

### AI-assistert integrasjon med GitHub Copilot

Repoet inneholder ferdige Copilot-skills som veileder deg steg for steg gjennom integrasjon av ny mikrofrontend — fra AD-grupper og Nais-konfig til proxy og side, klar for PR.

**Installer skills (én gang per maskin):**

```bash
cp -r .github/skills/astro-mikrofrontend ~/.copilot/skills/
cp -r .github/skills/react-mikrofrontend ~/.copilot/skills/
```

**Bruk i Copilot:**

| Skill | Prompt-eksempel |
|-------|----------------|
| `$astro-mikrofrontend` | `$astro-mikrofrontend Legg til sokos-up-min-app i portalen` |
| `$react-mikrofrontend` | `$react-mikrofrontend Integrer sokos-up-min-api med GCP-backend` |

Copilot stiller de nødvendige spørsmålene og genererer alle filer PR-klart.

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
