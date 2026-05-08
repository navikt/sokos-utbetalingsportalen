---
name: react-mikrofrontend
description: Integrer en ny React CSR-mikrofrontend i sokos-utbetalingsportalen — AD-grupper, Nais-konfig, API-proxy og side
license: MIT
compatibility: sokos-utbetalingsportalen (Astro container)
metadata:
  domain: frontend
  tags: react microfrontend nais sokos utbetalingsportalen csr
---

# React Mikrofrontend — sokos-utbetalingsportalen

Denne skillet hjelper deg integrere en ny React CSR-mikrofrontend i sokos-utbetalingsportalen. Følg stegene i rekkefølge og generer alle nødvendige filer for en PR-klar integrasjon.

## Hva du trenger fra utvikleren

Still disse spørsmålene før du genererer noe:

1. **Appnavn** — kortnavn i UPPER_SNAKE_CASE, f.eks. `MIN_APP` (brukes som env var-prefix og `app`-nøkkel i appConfig)
2. **Tittel** — visningsnavn i menyen, f.eks. `"Min Mikrofrontend"`
3. **Beskrivelse** — kort setning om hva appen gjør
4. **NAIS-appnavn** — frontend-appens NAIS-navn, f.eks. `sokos-up-min-app`
5. **Backend API-navn** — backend-tjenestens NAIS-app, f.eks. `sokos-up-min-app-api`
6. **Backend cluster** — `GCP` eller `FSS` (on-prem). Påvirker URL-format og accessPolicy
7. **Backend namespace** — som regel `okonomi`
8. **Rute** — URL-path i portalen, f.eks. `/min-app` (hele ord, bindestrek, ingen norske tegn)
9. **Routing i mikrofrontenden?** — bruker appen React Router internt? (`ja` = `[...slug].astro`, `nei` = flat `.astro`)
10. **AD-gruppe dev UUID** — fra [mygroups.microsoft.com](https://mygroups.microsoft.com/) (konvensjon: `0000-CA-SOKOS-MF-<APPNAVN>-READ`)
11. **AD-gruppe prod UUID** — fra [nav.omada.cloud](https://nav.omada.cloud/). Bruk `PLACEHOLDER_AD_GROUP` hvis bare dev.
12. **Er backend allerede registrert i portalen?** — hvis ja, hopp over Steg 2 og Steg 4

---

## Hurtigspor: Backend allerede registrert

Hvis backend-tjenesten allerede har Nais-tilgangspolicies og API-proxy på plass:

1. Gå til **Steg 1** — AD-grupper
2. Gå til **Steg 3** — appConfig.ts
3. Gå til **Steg 5** — opprett side

---

## Steg 1 — Naiserator: AD-grupper i `claims.groups`

Legg til i **begge** naiserator-filene (`.nais/naiserator-q1.yaml` og `.nais/naiserator-prod.yaml`):

```yaml
# Legg til under azure.application.claims.groups
- id: "<dev-gruppe-uuid>"   # 0000-CA-SOKOS-MF-<APPNAVN>-READ  (kun i naiserator-q1.yaml)
- id: "<prod-gruppe-uuid>"  # 0000-CA-SOKOS-MF-<APPNAVN>-READ  (kun i naiserator-prod.yaml)
```

> Bruk `PLACEHOLDER_AD_GROUP` i prod-filen hvis appen bare skal eksistere i dev.

---

## Steg 2 — Naiserator: Miljøvariabler og tilgangspolicies

### 2.1 Miljøvariabler

Legg til i `env:`-seksjonen i **begge** naiserator-filene:

**For GCP backend:**

```yaml
env:
  # <Backend API-navn> (Backend)
  - name: SOKOS_<APPNAVN>_API
    value: http://<backend-nais-appnavn>.<namespace>
  - name: SOKOS_<APPNAVN>_API_AUDIENCE
    value: api://dev-gcp.<namespace>.<backend-nais-appnavn>/.default
  - name: SOKOS_<APPNAVN>_API_PROXY
    value: "/<proxy-path>"
```

**For FSS (on-prem) backend:**

```yaml
env:
  # <Backend API-navn> (Backend FSS)
  - name: SOKOS_<APPNAVN>_API
    value: https://<backend-nais-appnavn>.dev-fss-pub.nais.io
  - name: SOKOS_<APPNAVN>_API_AUDIENCE
    value: api://dev-fss.<namespace>.<backend-nais-appnavn>/.default
  - name: SOKOS_<APPNAVN>_API_PROXY
    value: "/<proxy-path>"
```

I prod-filen: bytt `dev-gcp` → `prod-gcp` eller `dev-fss` → `prod-fss`.

> **Navnekonvensjon for env vars:**
> - `*_API` — faktisk URL til backend (`http://` for GCP, `https://` for FSS)
> - `*_API_AUDIENCE` — scope for OBO-token
> - `*_API_PROXY` — intern proxy-path i portalen (mappenavnet til `[...proxy].ts`)

### 2.2 Outbound accessPolicy

**For GCP backend** (legg til i `accessPolicy.outbound.rules`):

```yaml
accessPolicy:
  outbound:
    rules:
      - application: <backend-nais-appnavn>
        namespace: <namespace>   # utelat hvis namespace er okonomi
```

**For FSS backend** (legg til i `accessPolicy.outbound.external`):

```yaml
accessPolicy:
  outbound:
    external:
      - host: <backend-nais-appnavn>.dev-fss-pub.nais.io
```

### 2.3 Inbound i backend-repoet

I backend API sitt eget `naiserator.yaml`:

```yaml
accessPolicy:
  inbound:
    rules:
      - application: sokos-utbetalingsportalen
        namespace: okonomi
        cluster: dev-gcp   # prod-gcp i prod-filen
```

---

## Steg 3 — appConfig.ts

Legg til en ny oppføring i `src/config/appConfig.ts` i `apps`-arrayen:

```typescript
{
  app: "<APPNAVN>",                                          // UPPER_SNAKE_CASE
  title: "<Tittel>",
  description: "<Beskrivelse>",
  adGroupDevelopment: "<dev-gruppe-uuid>",
  adGroupProduction: "<prod-gruppe-uuid>",                   // eller PLACEHOLDER_AD_GROUP
  route: "/<rute>",
  naisAppName: "<nais-appnavn>",
},
```

> `app`-feltet i lowercase brukes som `appName` i `MicrofrontendCSR` (se Steg 5).

**Navngiving for `route`:**
- Hele ord, ikke forkortelser
- Små bokstaver, bindestrek mellom ord
- Translitterer: Æ→AE, Ø→OE, Å→AA

---

## Steg 4 — API-proxy (`[...proxy].ts`)

Opprett `src/pages/<proxy-path>/[...proxy].ts` (mappenavnet **må** matche `*_API_PROXY`):

```typescript
import type { APIRoute } from "astro";
import { routeProxyWithOboToken } from "@utils/server/proxy";

export const ALL: APIRoute = routeProxyWithOboToken({
  apiProxy: `${process.env.SOKOS_<APPNAVN>_API_PROXY}`,
  apiUrl: `${process.env.SOKOS_<APPNAVN>_API}`,
  audience: `${process.env.SOKOS_<APPNAVN>_API_AUDIENCE}`,
});
```

---

## Steg 5 — Mikrofrontend-side

### Med routing (React Router)

Opprett `src/pages/<rute>/[...<rute>].astro`:

```astro
---
import MicrofrontendCSR from "@components/microfrontend/MicrofrontendCSR.astro";
---

<MicrofrontendCSR appName="<appnavn-lowercase>" />
```

### Uten routing

Opprett `src/pages/<rute>.astro`:

```astro
---
import MicrofrontendCSR from "@components/microfrontend/MicrofrontendCSR.astro";
---

<MicrofrontendCSR appName="<appnavn-lowercase>" />
```

> `appName` må være lowercase-versjonen av `app`-feltet i `appConfig.ts`.
> Eksempel: `app: "MIN_APP"` → `appName="min_app"`

---

## Mappestruktur oppsummering

**Med routing:**
```
src/pages/
├── <rute>/
│   ├── [...<rute>].astro    ← Siden i portalen (med React Router)
│   └── (proxy i egen mappe)
└── <proxy-path>/
    └── [...proxy].ts        ← API-proxy

src/config/
└── appConfig.ts             ← Ny oppføring i apps-array

.nais/
├── naiserator-q1.yaml       ← AD-gruppe, env vars, accessPolicy
└── naiserator-prod.yaml     ← AD-gruppe, env vars, accessPolicy
```

**Uten routing:**
```
src/pages/
├── <rute>.astro             ← Siden i portalen (flat)
└── <proxy-path>/
    └── [...proxy].ts        ← API-proxy
```

---

## PR-sjekkliste

Generer dette som PR-beskrivelse eller sjekkliste:

```markdown
## Integrasjon: <Tittel> (React CSR)

### Filer endret
- [ ] `.nais/naiserator-q1.yaml` — AD-gruppe, env vars, outbound accessPolicy
- [ ] `.nais/naiserator-prod.yaml` — AD-gruppe, env vars, outbound accessPolicy
- [ ] `src/config/appConfig.ts` — ny app-oppføring
- [ ] `src/pages/<proxy-path>/[...proxy].ts` — ny API-proxy
- [ ] `src/pages/<rute>.astro` eller `src/pages/<rute>/[...<rute>].astro` — ny side

### Verifisering
- [ ] Mikrofrontend laster og rendres i dev
- [ ] API-kall rutes til korrekt backend
- [ ] Tilgangskontroll fungerer (bare AD-gruppemedlemmer ser appen)
- [ ] Routing fungerer (hvis aktivert)
- [ ] Alle tre env vars (`*_API`, `*_API_AUDIENCE`, `*_API_PROXY`) er definert i begge naiserator-filer
- [ ] Proxy-path (mappenavnet) samsvarer med `*_API_PROXY`-verdien

### Backend-repo (ekstern PR)
- [ ] `accessPolicy.inbound` for sokos-utbetalingsportalen er lagt til
```

---

## Eksempel — ferdig integrasjon (GCP, med routing)

Med verdiene:
- Appnavn: `OPPDRAGSINFO`
- Backend: `sokos-oppdrag` (FSS)
- Proxy-path: `/oppdrag-api`
- Rute: `/oppdragsinfo`

**naiserator-q1.yaml (utdrag):**
```yaml
azure:
  application:
    claims:
      groups:
        - id: "e0023d91-26bc-4d5d-95ba-3148b6123afc" # 0000-CA-SOKOS-MF-OppdragsInfo

env:
  - name: SOKOS_OPPDRAG_API
    value: https://sokos-oppdrag.dev-fss-pub.nais.io
  - name: SOKOS_OPPDRAG_API_AUDIENCE
    value: api://dev-fss.okonomi.sokos-oppdrag/.default
  - name: SOKOS_OPPDRAG_API_PROXY
    value: "/oppdrag-api"

accessPolicy:
  outbound:
    external:
      - host: sokos-oppdrag.dev-fss-pub.nais.io
```

**src/pages/oppdrag-api/[...proxy].ts:**
```typescript
import type { APIRoute } from "astro";
import { routeProxyWithOboToken } from "@utils/server/proxy";

export const ALL: APIRoute = routeProxyWithOboToken({
  apiProxy: `${process.env.SOKOS_OPPDRAG_API_PROXY}`,
  apiUrl: `${process.env.SOKOS_OPPDRAG_API}`,
  audience: `${process.env.SOKOS_OPPDRAG_API_AUDIENCE}`,
});
```

**src/pages/oppdragsinfo/[...oppdragsinfo].astro:**
```astro
---
import MicrofrontendCSR from "@components/microfrontend/MicrofrontendCSR.astro";
---

<MicrofrontendCSR appName="oppdragsinfo" />
```
