# Guide: Astro Mikrofrontend

Denne guiden viser hvordan du integrerer en server-side rendered Astro mikrofrontend i Utbetalingsportalen.

## Forutsetninger

- En Astro-applikasjon som kan deployes som mikrofrontend
- Tilgang til NAIS-konfigurasjonsfilene
- AD-grupper for dev og prod
- React-versjon i mikrofrontend må være samme major versjon som React i Utbetalingsportalen

## Hurtigspor: Backend allerede registrert

Hvis backend-tjenesten allerede er konfigurert i portalen (NAIS-tilgangspolicies og API-proxy er på plass), trenger du kun:

1. **[Steg 1](#steg-1-opprett-ad-grupper)** – Opprett AD-grupper og legg dem til i naiserator
2. **[Steg 3](#steg-3-registrer-applikasjonen)** – Legg til oppføring i `appConfig.ts`
3. **[Steg 5](#steg-5-opprett-side-i-utbetalingsportalen)** – Opprett `.astro`-siden

Hopp over Steg 2 og Steg 4.

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

Legg til nødvendige miljøvariabler og tilgangspolicies i både `.nais/naiserator-q1.yaml` og `.nais/naiserator-prod.yaml`.

**Eksempel på miljøvariabler:**

```yaml
env:
  - name: SOKOS_EKSEMPEL_URL
    value: https://sokos-eksempel.dev-gcp.nais.io
  - name: SOKOS_EKSEMPEL_AUDIENCE
    value: api://dev-gcp.okonomi.sokos-eksempel/.default
```

### 2.2 Konfigurer tilgangspolicies

**For GCP-mikrofrontend:**

```yaml
accessPolicy:
  outbound:
    rules:
      - application: sokos-eksempel
        namespace: okonomi
```

**For FSS-mikrofrontend:**

Se [NAIS-dokumentasjonen](https://docs.nais.io/workloads/explanations/migrating-to-gcp/#how-do-i-reach-an-application-found-on-premises-from-my-application-in-gcp) for kommunikasjon mellom GCP og FSS.

```yaml
accessPolicy:
  outbound:
    external:
      - host: sokos-eksempel.dev-fss-pub.nais.io
```

### 2.3 Åpne for innkommende trafikk

Legg til i mikrofrontend sin `naiserator.yaml`:

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

For at vi skal kunne snakke til Astro backenden gjennom Utbetalingsportalen, må vi sette opp en API-proxy.

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
  apiUrl: `${process.env.SOKOS_EKSEMPEL_URL}`,
  audience: `${process.env.SOKOS_EKSEMPEL_AUDIENCE}`,
});
```

### Parametere

| Parameter | Beskrivelse | Eksempel |
|-----------|-------------|----------|
| `apiProxy` | Path som matcher din mikrofrontend-rute | `"/min-mikrofrontend"` |
| `apiUrl` | URL til backend-tjenesten (fra naiserator) | `process.env.SOKOS_EKSEMPEL_URL` |
| `audience` | Azure AD audience scope (fra naiserator) | `process.env.SOKOS_EKSEMPEL_AUDIENCE` |

### Hvordan det fungerer

- Proxy-ruten fanger alle forespørsler til `/min-mikrofrontend/*`
- OBO-token (On-Behalf-Of) hentes automatisk basert på audience
- Forespørsler videresendes til backend med riktig autentisering
- Svar returneres til mikrofrontenden

## Steg 5: Opprett side i Utbetalingsportalen

Lag en ny `.astro`-fil under `src/pages/` med navnet på ruten (f.eks. `min-mikrofrontend.astro`):

```astro
---
import ContentLoader from "@components/loader/ContentLoader";
import MicrofrontendSSR from "@components/microfrontend/MicrofrontendSSR.astro";
import Layout from "@layouts/Layout.astro";
---

<Layout title="Min mikrofrontend">
  <MicrofrontendSSR
    appTitle="Min Mikrofrontend"
    appUrl={process.env.SOKOS_EKSEMPEL_URL}
    appAudience={process.env.SOKOS_EKSEMPEL_AUDIENCE}
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
| `appUrl` | URL til mikrofrontend (fra naiserator) | `process.env.SOKOS_EKSEMPEL_URL` |
| `appAudience` | Azure AD audience scope (fra naiserator) | `process.env.SOKOS_EKSEMPEL_AUDIENCE` |

## Verifisering

Mikrofrontenden er nå integrert! Test at:

1. Siden lastes uten feil
2. HTML fra mikrofrontend rendres korrekt
3. Tilgangskontroll fungerer som forventet

## Tips

- **URL-navngivning**: Bruk hele ord, små bokstaver og bindestreker. Unngå æ/ø/å.
- **Environment-variabler**: Dobbeltsjekk at alle miljøvariabler er definert i både dev og prod.
