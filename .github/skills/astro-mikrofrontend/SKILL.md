---
name: astro-mikrofrontend
description: Integrer en ny Astro SSR-mikrofrontend i sokos-utbetalingsportalen — AD-grupper, Nais-konfig, proxy og side
license: MIT
compatibility: sokos-utbetalingsportalen (Astro container)
metadata:
  domain: frontend
  tags: astro microfrontend nais sokos utbetalingsportalen ssr
---

# Astro Mikrofrontend — sokos-utbetalingsportalen

Denne skillet hjelper deg integrere en ny Astro SSR-mikrofrontend i sokos-utbetalingsportalen. Følg stegene i rekkefølge og generer alle nødvendige filer for en PR-klar integrasjon.

## Hva du trenger fra utvikleren

Still disse spørsmålene før du genererer noe:

1. **Appnavn** — kortnavn i UPPER_SNAKE_CASE, f.eks. `MIN_APP` (brukes som env var-prefix og `app`-nøkkel i appConfig)
2. **Tittel** — visningsnavn i menyen, f.eks. `"Min Mikrofrontend"`
3. **Beskrivelse** — kort setning om hva appen gjør
4. **NAIS-appnavn** — f.eks. `sokos-up-min-app` (samme som i mikrofrontend-repoets `naiserator.yaml`)
5. **Namespace** — som regel `okonomi`, men kan være noe annet (f.eks. `ytelsesrapportering`)
6. **Rute** — URL-path i portalen, f.eks. `/min-app` (bruk hele ord, bindestrek, ingen norske tegn)
7. **AD-gruppe dev UUID** — fra [mygroups.microsoft.com](https://mygroups.microsoft.com/) (konvensjon: `0000-CA-SOKOS-MF-<APPNAVN>-READ`)
8. **AD-gruppe prod UUID** — fra [nav.omada.cloud](https://nav.omada.cloud/). Bruk `PLACEHOLDER_AD_GROUP` hvis bare dev.
9. **Lokal utviklingsstøtte?** — vil du ha lokal URL-override (localhost) i .astro-filen?
10. **Lokal port** — (bare hvis ja på punkt 9), f.eks. `4322`

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

Legg til i `env:`-seksjonen i **begge** naiserator-filene. Følg mønsteret `SOKOS_UP_<APPNAVN>_URL` og `SOKOS_UP_<APPNAVN>_AUDIENCE`:

```yaml
env:
  # <Tittel> (Astro mikrofrontend)
  - name: SOKOS_UP_<APPNAVN>_URL
    value: http://<nais-appnavn>.<namespace>          # dev: http://sokos-up-min-app.okonomi
  - name: SOKOS_UP_<APPNAVN>_AUDIENCE
    value: api://dev-gcp.<namespace>.<nais-appnavn>/.default
```

I prod-filen, bytt `dev-gcp` → `prod-gcp` i audience.

### 2.2 Outbound accessPolicy

Legg til i `accessPolicy.outbound.rules` i utbetalingsportalen sin naiserator:

```yaml
accessPolicy:
  outbound:
    rules:
      - application: <nais-appnavn>
        namespace: <namespace>   # utelat hvis namespace er okonomi
```

### 2.3 Inbound i mikrofrontend-repoet

I Astro-mikrofrontend sitt eget `naiserator.yaml`, legg til:

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

**Navngiving for `route`:**
- Hele ord, ikke forkortelser
- Små bokstaver, bindestrek mellom ord
- Translitterer: Æ→AE, Ø→OE, Å→AA

---

## Steg 4 — API-proxy (`[...proxy].ts`)

Opprett `src/pages/<rute>/[...proxy].ts`:

```typescript
import { routeProxyWithOboToken } from "@utils/server/proxy";
import type { APIRoute } from "astro";

export const ALL: APIRoute = routeProxyWithOboToken({
  apiProxy: "/<rute>",
  apiUrl: `${process.env.SOKOS_UP_<APPNAVN>_URL}`,
  audience: `${process.env.SOKOS_UP_<APPNAVN>_AUDIENCE}`,
});
```

---

## Steg 5 — Astro-side

### Standard (uten lokal override)

Opprett `src/pages/<rute>.astro`:

```astro
---
import ContentLoader from "@components/loader/ContentLoader";
import MicrofrontendSSR from "@components/microfrontend/MicrofrontendSSR.astro";
import Layout from "@layouts/Layout.astro";
---

<Layout title="<Tittel>">
  <MicrofrontendSSR
    appTitle="<Tittel>"
    appUrl={process.env.SOKOS_UP_<APPNAVN>_URL}
    appAudience={process.env.SOKOS_UP_<APPNAVN>_AUDIENCE}
    server:defer
  >
    <ContentLoader slot="fallback" />
  </MicrofrontendSSR>
</Layout>
```

### Med støtte for lokal utvikling

Opprett `src/pages/<rute>.astro` med lokal URL-override:

```astro
---
import ContentLoader from "@components/loader/ContentLoader";
import MicrofrontendSSR from "@components/microfrontend/MicrofrontendSSR.astro";
import Layout from "@layouts/Layout.astro";
import { getServerSideEnvironment } from "@utils/server/environment";

const isLocalEnv = getServerSideEnvironment() === "local";
const appUrl = isLocalEnv
  ? "http://localhost:<port>/"
  : process.env.SOKOS_UP_<APPNAVN>_URL;
const appAudience = isLocalEnv
  ? "api://dev-gcp.<namespace>.<nais-appnavn>/.default"
  : process.env.SOKOS_UP_<APPNAVN>_AUDIENCE;
---

<Layout title="<Tittel>">
  <MicrofrontendSSR
    appTitle="<Tittel>"
    appUrl={appUrl}
    appAudience={appAudience}
    server:defer
  >
    <ContentLoader slot="fallback" />
  </MicrofrontendSSR>
</Layout>
```

---

## Mappestruktur oppsummering

```
src/pages/
└── <rute>/
│   └── [...proxy].ts        ← API-proxy
└── <rute>.astro             ← Siden i portalen

src/config/
└── appConfig.ts             ← Ny oppføring i apps-array

.nais/
├── naiserator-q1.yaml       ← AD-gruppe, env vars, accessPolicy
└── naiserator-prod.yaml     ← AD-gruppe, env vars, accessPolicy
```

---

## PR-sjekkliste

Generer dette som PR-beskrivelse eller sjekkliste:

```markdown
## Integrasjon: <Tittel> (Astro SSR)

### Filer endret
- [ ] `.nais/naiserator-q1.yaml` — AD-gruppe, env vars, outbound accessPolicy
- [ ] `.nais/naiserator-prod.yaml` — AD-gruppe, env vars, outbound accessPolicy
- [ ] `src/config/appConfig.ts` — ny app-oppføring
- [ ] `src/pages/<rute>/[...proxy].ts` — ny API-proxy
- [ ] `src/pages/<rute>.astro` — ny side

### Verifisering
- [ ] Siden laster uten feil i dev
- [ ] HTML fra mikrofrontend rendres korrekt (SSR)
- [ ] Tilgangskontroll fungerer (bare AD-gruppemedlemmer ser appen)
- [ ] Env vars er definert i både dev og prod naiserator
- [ ] Mikrofrontend-repoet har lagt til inbound accessPolicy for sokos-utbetalingsportalen

### Mikrofrontend-repo (ekstern PR)
- [ ] `accessPolicy.inbound` for sokos-utbetalingsportalen er lagt til
```

---

## Eksempel — ferdig integrasjon

Med verdiene:
- Appnavn: `SKATTEKORT_ADMIN`
- Tittel: `Skattekort Administrator`
- NAIS-appnavn: `sokos-up-skattekort-admin`
- Namespace: `okonomi`
- Rute: `/skattekort-admin`

Ser `astro-template.astro` slik ut:

```astro
---
import ContentLoader from "@components/loader/ContentLoader";
import MicrofrontendSSR from "@components/microfrontend/MicrofrontendSSR.astro";
import Layout from "@layouts/Layout.astro";
---

<Layout title="Skattekort Administrator">
  <MicrofrontendSSR
    appTitle="Skattekort Administrator"
    appUrl={process.env.SOKOS_UP_SKATTEKORT_ADMIN_URL}
    appAudience={process.env.SOKOS_UP_SKATTEKORT_ADMIN_AUDIENCE}
    server:defer
  >
    <ContentLoader slot="fallback" />
  </MicrofrontendSSR>
</Layout>
```
