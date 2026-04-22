# Guide: Astro Mikrofrontend

Denne guiden viser hvordan du integrerer en server-side rendered Astro mikrofrontend i Utbetalingsportalen.

## Forutsetninger

- En Astro-applikasjon klar til å deployes som mikrofrontend
- Tilgang til NAIS-konfigurasjonsfilene
- React-versjon i mikrofrontend må være samme major versjon som React i Utbetalingsportalen

---

## Steg 1: Opprett AD-grupper

Hver applikasjon i Utbetalingsportalen krever egne AD-grupper for å styre tilgang i henholdsvis dev og prod.

### 1.1 Opprett dev-gruppe

Dev-grupper kan opprettes selv via [My Groups](https://mygroups.microsoft.com/). Navngi gruppen etter konvensjonen `0000-CA-SOKOS-MF-<APPNAVN>-<ROLLE>`, f.eks. `0000-CA-SOKOS-MF-MIN-APP-READ`.

Logg inn med trygdeetaten bruker. UUID'en ligger i URL'en etter /groups/.

### 1.2 Prod-gruppe

Prod-grupper administreres via [nav.omada.cloud](https://nav.omada.cloud/). Hvis applikasjonen kun skal eksistere i dev, brukes konstanten `PLACEHOLDER_AD_GROUP` som verdi for `adGroupProduction` i `appConfig.ts` (se Steg 3).

### 1.3 Legg til AD-grupper i naiserator

Legg til UUID-ene i `claims.groups` i både `.nais/naiserator-q1.yaml` og `.nais/naiserator-prod.yaml`:

```yaml
azure:
  application:
    claims:
      groups:
        - id: "<dev-gruppe-uuid>"   # 0000-CA-SOKOS-MF-MIN-APP-READ (kun i naiserator-q1.yaml)
        - id: "<prod-gruppe-uuid>"  # 0000-CA-SOKOS-MF-MIN-APP-READ (kun i naiserator-prod.yaml)
```

---

## Steg 2: Konfigurer NAIS

### 2.1 Oppdater naiserator-filer

Legg til miljøvariabler i både `.nais/naiserator-q1.yaml` og `.nais/naiserator-prod.yaml`.

Navngi variablene etter mønsteret `SOKOS_UP_<APPNAVN>_URL` og `SOKOS_UP_<APPNAVN>_AUDIENCE`:

```yaml
env:
  - name: SOKOS_UP_EKSEMPEL_URL
    value: http://sokos-up-eksempel.eksempel          # dev-gcp intern URL
  - name: SOKOS_UP_EKSEMPEL_AUDIENCE
    value: api://dev-gcp.eksempel.sokos-up-eksempel/.default
```

> URL-formatet for GCP er `http://<appnavn>.<namespace>`. Audience-formatet er `api://<cluster>.<namespace>.<appnavn>/.default`.

### 2.2 Konfigurer tilgangspolicies

Legg til outbound-regel i Utbetalingsportalen sin naiserator for å tillate kommunikasjon med Astro-appen:

```yaml
accessPolicy:
  outbound:
    rules:
      - application: sokos-up-eksempel
        namespace: eksempel
```

### 2.3 Åpne for innkommende trafikk

Legg til inbound-regel i Astro-mikrofrontend sin `naiserator.yaml`:

```yaml
accessPolicy:
  inbound:
    rules:
      - application: sokos-utbetalingsportalen
        namespace: okonomi
        cluster: dev-gcp
```

## Steg 3: Registrer applikasjonen

Legg til applikasjonskonfigurasjon i `src/config/appConfig.ts`:

```typescript
{
  app: "MIKROFRONTEND",
  title: "Min Mikrofrontend",
  description: "Beskrivelse av mikrofrontenden",
  adGroupDevelopment: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  adGroupProduction: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  route: "/min-mikrofrontend",
  naisAppName: "sokos-up-min-mikrofrontend",
}
```

**Felt-forklaring:**

| Felt | Beskrivelse | Eksempel |
|------|-------------|----------|
| `app` | Unik nøkkel (store bokstaver) | `"MIKROFRONTEND"` |
| `title` | Visningsnavn i menyer | `"Min Mikrofrontend"` |
| `description` | Kort beskrivelse | `"Beskrivelse av mikrofrontenden"` |
| `adGroupDevelopment` | Azure AD gruppe UUID for dev | `"abc123..."` |
| `adGroupProduction` | Azure AD gruppe UUID for prod. Bruk `PLACEHOLDER_AD_GROUP` hvis applikasjonen kun er i dev. | `"xyz789..."` eller `PLACEHOLDER_AD_GROUP` |
| `route` | URL-path i portalen | `"/min-mikrofrontend"` |
| `naisAppName` | NAIS applikasjonsnavn | `"sokos-up-min-mikrofrontend"` |

**URL-navngivningsregler:**

- Bruk hele ord, ikke forkortelser
- Små bokstaver
- Bindestrek for å skille ord
- Translitterer norske tegn: Æ→AE, Ø→OE, Å→AA

## Steg 4: Sett opp API-proxy

Astro-appen kjører server-side og kommuniserer med Utbetalingsportalen via en proxy-rute.

### 4.1 Opprett proxy-rute

Lag en ny mappe under `src/pages/` med samme navn som ruten din, og opprett filen `[...proxy].ts` i denne mappen:

```
src/pages/
  min-mikrofrontend/
    [...proxy].ts
```

**Eksempel `[...proxy].ts`:**

```typescript
import { routeProxyWithOboToken } from "@utils/server/proxy";
import type { APIRoute } from "astro";

export const ALL: APIRoute = routeProxyWithOboToken({
  apiProxy: "/min-mikrofrontend",
  apiUrl: `${process.env.SOKOS_UP_EKSEMPEL_URL}`,
  audience: `${process.env.SOKOS_UP_EKSEMPEL_AUDIENCE}`,
});
```

### Parametere

| Parameter | Beskrivelse | Eksempel |
|-----------|-------------|----------|
| `apiProxy` | Path som matcher din mikrofrontend-rute | `"/min-mikrofrontend"` |
| `apiUrl` | URL til Astro-appen (fra naiserator) | `process.env.SOKOS_UP_EKSEMPEL_URL` |
| `audience` | Azure AD audience scope (fra naiserator) | `process.env.SOKOS_UP_EKSEMPEL_AUDIENCE` |

### Hvordan det fungerer

- Proxy-ruten fanger alle forespørsler til `/min-mikrofrontend/*`
- OBO-token (On-Behalf-Of) hentes automatisk basert på audience
- Forespørsler videresendes til Astro-appen med riktig autentisering
- Svar returneres til Utbetalingsportalen

## Steg 5: Opprett side i Utbetalingsportalen

Lag en ny `.astro`-fil under `src/pages/` med navnet på ruten (f.eks. `min-mikrofrontend.astro`):

```astro
---
import ContentLoader from "@components/loader/ContentLoader";
import MicrofrontendSSR from "@components/microfrontend/MicrofrontendSSR.astro";
import Layout from "@layouts/Layout.astro";
---

<Layout title="Min Mikrofrontend">
  <MicrofrontendSSR
    appTitle="Min Mikrofrontend"
    appUrl={process.env.SOKOS_UP_EKSEMPEL_URL}
    appAudience={process.env.SOKOS_UP_EKSEMPEL_AUDIENCE}
    server:defer
  >
    <ContentLoader slot="fallback" />
  </MicrofrontendSSR>
</Layout>
```

### Props-forklaring

| Prop | Beskrivelse | Eksempel |
|------|-------------|----------|
| `appTitle` | Tittelen som vises i browser-fanen | `"Min Mikrofrontend"` |
| `appUrl` | URL til Astro-appen | `process.env.SOKOS_UP_EKSEMPEL_URL` |
| `appAudience` | Azure AD audience scope | `process.env.SOKOS_UP_EKSEMPEL_AUDIENCE` |

### Med støtte for lokal utvikling

Hvis du ønsker å kjøre Astro-mikrofrontenden lokalt sammen med Utbetalingsportalen, kan du legge til en lokal URL-override med `getServerSideEnvironment()`:

```astro
---
import ContentLoader from "@components/loader/ContentLoader";
import MicrofrontendSSR from "@components/microfrontend/MicrofrontendSSR.astro";
import Layout from "@layouts/Layout.astro";
import { getServerSideEnvironment } from "@utils/server/environment";

const isLocalEnv = getServerSideEnvironment() === "local";
const appUrl = isLocalEnv
  ? "http://localhost:4322/"
  : process.env.SOKOS_UP_EKSEMPEL_URL;
const appAudience = isLocalEnv
  ? "api://dev-gcp.eksempel.sokos-up-eksempel/.default"
  : process.env.SOKOS_UP_EKSEMPEL_AUDIENCE;
---

<Layout title="Min Mikrofrontend">
  <MicrofrontendSSR
    appTitle="Min Mikrofrontend"
    appUrl={appUrl}
    appAudience={appAudience}
    server:defer
  >
    <ContentLoader slot="fallback" />
  </MicrofrontendSSR>
</Layout>
```

> Husk å oppdatere `localhost`-porten til den porten Astro-mikrofrontenden din kjører på lokalt.

## Verifisering

Mikrofrontenden er nå integrert! Test at:

1. Siden lastes uten feil
2. HTML fra mikrofrontend rendres korrekt
3. Tilgangskontroll fungerer som forventet

## Tips

- **URL-navngivning**: Bruk hele ord, små bokstaver og bindestreker. Unngå æ/ø/å.
- **Env var-navngivning**: Følg mønsteret `SOKOS_UP_<APPNAVN>_URL` og `SOKOS_UP_<APPNAVN>_AUDIENCE` konsekvent i naiserator, proxy og side.
- **Lokal utvikling**: Husk å starte Astro-mikrofrontenden lokalt på riktig port og oppdater localhost-URL-en i `.astro`-filen tilsvarende.
- **Environment-variabler**: Dobbeltsjekk at alle miljøvariabler er definert i både dev og prod naiserator.
