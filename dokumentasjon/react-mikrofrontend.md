# Guide: React Mikrofrontend

Denne guiden viser hvordan du integrerer en client-side React mikrofrontend i Utbetalingsportalen med backend API-proxying.

## Forutsetninger

- En React-applikasjon klar til å deployes som mikrofrontend
- Backend API som mikrofrontenden skal kommunisere med
- AD-grupper for tilgangskontroll
- Tilgang til NAIS-konfigurasjonsfilene
- React-versjon i mikrofrontend må være samme major versjon som React i Utbetalingsportalen

## Hurtigspor: Backend allerede registrert

Hvis backend-tjenesten allerede er konfigurert i portalen (NAIS-tilgangspolicies og API-proxy er på plass), trenger du kun:

1. **[Steg 1](#steg-1-opprett-ad-grupper)** – Opprett AD-grupper og legg dem til i naiserator
2. **[Steg 3](#steg-3-registrer-applikasjonen)** – Legg til oppføring i `appConfig.ts`
3. **[Steg 5](#steg-5-opprett-mikrofrontend-side)** – Opprett `.astro`-siden

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

### 2.1 Definer miljøvariabler

Legg til følgende i både `.nais/naiserator-q1.yaml` og `.nais/naiserator-prod.yaml`:

```yaml
env:
  # Backend API konfigurasjon
  - name: SOKOS_EKSEMPEL_API
    value: https://sokos-eksempel.dev-fss-pub.nais.io
  - name: SOKOS_EKSEMPEL_API_AUDIENCE
    value: api://dev-fss.okonomi.sokos-eksempel/.default
  - name: SOKOS_EKSEMPEL_API_PROXY
    value: "/eksempel-api"
```

**Forklaring av miljøvariabler:**

| Variabel | Beskrivelse | Eksempel |
|----------|-------------|----------|
| `*_API` | Faktisk URL til backend-tjenesten | `https://sokos-eksempel.dev-fss-pub.nais.io` (FSS) / `http://sokos-eksempel` (GCP) |
| `*_API_AUDIENCE` | Scope basert på hvilket cluster | `api://dev-fss.okonomi.sokos-eksempel/.default` |
| `*_API_PROXY` | Intern proxy-path i Utbetalingsportalen | `"/eksempel-api"` |

### 2.2 Konfigurer tilgangspolicies

**For GCP backend:**

```yaml
accessPolicy:
  outbound:
    rules:
      - application: sokos-eksempel-api
        namespace: okonomi
```

**For FSS backend:**

```yaml
accessPolicy:
  outbound:
    external:
      - host: sokos-eksempel.dev-fss-pub.nais.io
```

> For kommunikasjon mellom GCP og FSS, se [NAIS-dokumentasjonen](https://docs.nais.io/workloads/explanations/migrating-to-gcp/#how-do-i-reach-an-application-found-on-premises-from-my-application-in-gcp).

### 2.3 Åpne for innkommende trafikk

Legg til i backend API sin `naiserator.yaml`:

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

Opprett `src/pages/eksempel-api/[...proxy].ts` (navn må matche `*_API_PROXY`):

```typescript
import type { APIRoute } from "astro";
import { routeProxyWithOboToken } from "@utils/server/proxy";

export const ALL: APIRoute = routeProxyWithOboToken({
  apiProxy: `${process.env.SOKOS_EKSEMPEL_API_PROXY}`,
  apiUrl: `${process.env.SOKOS_EKSEMPEL_API}`,
  audience: `${process.env.SOKOS_EKSEMPEL_API_AUDIENCE}`,
});
```

> ⚠️ Mappenavnet må matche det som er definert i `*_API_PROXY`.

## Steg 5: Opprett mikrofrontend-side

### Med routing (React Router)

Opprett `src/pages/min-mikrofrontend/[...min-mikrofrontend].astro`:

```astro
---
import MicrofrontendCSR from "@components/microfrontend/MicrofrontendCSR.astro";
---

<MicrofrontendCSR appName="mikrofrontend" />
```

### Uten routing

Opprett `src/pages/min-mikrofrontend.astro`:

```astro
---
import MicrofrontendCSR from "@components/microfrontend/MicrofrontendCSR.astro";
---

<MicrofrontendCSR appName="mikrofrontend" />
```

> ⚠️ `appName` må være lowercase-versjonen av `app` fra `appConfig.ts`.

## Verifisering

Sjekk at følgende fungerer:

1. Mikrofrontend lastes og rendres
2. API-kall rutes til korrekt backend
3. Tilgangskontroll fungerer
4. Routing fungerer (hvis aktivert)

## Mappestruktur

```text
src/pages/
├── min-mikrofrontend/                # Med routing
│   └── [...min-mikrofrontend].astro
├── min-mikrofrontend.astro           # Uten routing
└── eksempel-api/                     # API proxy
    └── [...proxy].ts
```

## Tips

- **Environment-variabler**: Alle tre variabler (`*_API`, `*_API_AUDIENCE`, `*_API_PROXY`) må defineres i både dev og prod.
- **Proxy-naming**: Hold proxy-path konsistent med mappenavnet for å unngå forvirring.
- **FSS vs GCP**: Husk `https://` for FSS og `http://` for GCP.
