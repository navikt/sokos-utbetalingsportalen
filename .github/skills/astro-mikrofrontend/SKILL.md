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

1. **Appnavn** — appnøkkel i store bokstaver, for eksempel `MIN_APP` eller `SKATTEKORT-ADMIN`. `appConfig` bruker små bokstaver av denne verdien for `appName`. Miljøvariabelprefikset følger UPPER_SNAKE_CASE.
2. **Tittel** — visningsnavn i menyen, f.eks. `"Min Mikrofrontend"`
3. **Beskrivelse** — kort setning om hva appen gjør
4. **NAIS-appnavn** — f.eks. `sokos-up-min-app` (samme som i mikrofrontend-repoets `naiserator.yaml`)
5. **Namespace** — som regel `okonomi`, men kan være noe annet (f.eks. `ytelsesrapportering`)
6. **Rute** — URL-path i portalen, f.eks. `/min-app` (bruk hele ord, bindestrek, ingen norske tegn)
7. **AD-gruppe dev UUID** — fra [mygroups.microsoft.com](https://mygroups.microsoft.com/) (konvensjon: `0000-CA-SOKOS-MF-<APPNAVN>-READ`)
8. **AD-gruppe prod UUID** — fra [nav.omada.cloud](https://nav.omada.cloud/). Bruk `PLACEHOLDER_AD_GROUP` hvis bare dev.
9. **Lokal utviklingsstøtte?** — vil du ha lokal URL-override (localhost) i .astro-filen?
10. **Lokal port** — (bare hvis ja på punkt 9), f.eks. `4322`
11. **QX** — skal appen også være tilgjengelig i QX?

---

## Steg 1 — Naiserator: AD-grupper i `claims.groups`

Legg til dev-gruppen i `.nais/naiserator-q1.yaml` og prod-gruppen i `.nais/naiserator-prod.yaml`. Hvis appen skal være tilgjengelig i QX, legg også dev-gruppen i `.nais/naiserator-qx.yaml`.

```yaml
# Legg til under azure.application.claims.groups
- id: "<dev-gruppe-uuid>"   # 0000-CA-SOKOS-MF-<APPNAVN>-READ  (kun i naiserator-q1.yaml)
- id: "<prod-gruppe-uuid>"  # 0000-CA-SOKOS-MF-<APPNAVN>-READ  (kun i naiserator-prod.yaml)
```

> Bruk `PLACEHOLDER_AD_GROUP` i prod-filen hvis appen bare skal eksistere i dev.
> QX bruker dev-gruppen. Ikke legg prod-gruppen i QX.

---

## Steg 2 — Naiserator: Miljøvariabler og tilgangspolicies

### 2.1 Miljøvariabler

Legg til i `env:`-seksjonen i Q1 og prod. Følg mønsteret `SOKOS_UP_<APPNAVN>_URL` og `SOKOS_UP_<APPNAVN>_AUDIENCE`. Hvis appen skal være tilgjengelig i QX, legg også inn variablene i `.nais/naiserator-qx.yaml` med QX-endepunkt og audience fra tjenesteeieren. Ikke kopier Q1-verdiene uten å kontrollere dem.

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

Legg til i `accessPolicy.outbound.rules` i naiseratoren for hvert miljø appen skal være tilgjengelig i:

```yaml
accessPolicy:
  outbound:
    rules:
      - application: <nais-appnavn>
        namespace: <namespace>   # utelat hvis namespace er okonomi
```

For QX legger du til tilgang til QX-endepunktet i `.nais/naiserator-qx.yaml`. Avklar med mikrofrontend-teamet at deres inbound-policy også tillater portalens QX-deployment og riktig cluster.

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
  app: "<APPNAVN>",                                          // store bokstaver; bindestrek er også brukt
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
import { TEAM } from "@config/team";
import { routeProxyWithOboToken } from "@utils/server/proxy";
import type { APIRoute } from "astro";

export const ALL: APIRoute = routeProxyWithOboToken({
  apiProxy: "/<rute>",
  apiUrl: `${process.env["SOKOS_UP_<APPNAVN>_URL"]}`,
  audience: `${process.env["SOKOS_UP_<APPNAVN>_AUDIENCE"]}`,
  team: TEAM.BEREGNING,
});
```

Velg riktig team fra `src/config/team.ts`. `team` brukes i auditloggen og er obligatorisk.

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
    appUrl={process.env["SOKOS_UP_<APPNAVN>_URL"]}
    appAudience={process.env["SOKOS_UP_<APPNAVN>_AUDIENCE"]}
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
  : process.env["SOKOS_UP_<APPNAVN>_URL"];
const appAudience = isLocalEnv
  ? "api://dev-gcp.<namespace>.<nais-appnavn>/.default"
  : process.env["SOKOS_UP_<APPNAVN>_AUDIENCE"];
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

## Steg 6 — Lokal tilgang i utviklingsmiljøet

Legg `adGroupDevelopment`-UUID-en i `MOCK_USER_GROUPS` i `mock/auth/adGroups.ts`.

Denne gruppelisten brukes av den syntetiske brukeren i `pnpm dev` og av mock-OIDC-oppsettet i `pnpm dev:mock`.

```typescript
// mock/auth/adGroups.ts — legg til i MOCK_USER_GROUPS
"<dev-gruppe-uuid>", // 0000-CA-SOKOS-MF-<APPNAVN>-READ
```

> Kun `adGroupDevelopment` legges inn her — prod-gruppen håndteres av Azure AD i kjørende miljøer.

---

## Mappestruktur oppsummering

```
src/pages/
└── <rute>/
│   └── [...proxy].ts        ← API-proxy
└── <rute>.astro             ← Siden i portalen

src/config/
└── appConfig.ts             ← Ny oppføring i apps-array

mock/auth/
└── adGroups.ts              ← adGroupDevelopment i MOCK_USER_GROUPS (lokal utvikling)

.nais/
├── naiserator-q1.yaml       ← AD-gruppe, env vars, accessPolicy
├── naiserator-qx.yaml       ← samme, hvis appen skal være tilgjengelig i QX
└── naiserator-prod.yaml     ← AD-gruppe, env vars, accessPolicy
```

---

## PR-sjekkliste

Generer dette som PR-beskrivelse eller sjekkliste:

```markdown
## Integrasjon: <Tittel> (Astro SSR)

### Filer endret
- [ ] `.nais/naiserator-q1.yaml` — dev-gruppe, env vars, outbound accessPolicy
- [ ] `.nais/naiserator-qx.yaml` — QX-gruppe, env vars og outbound accessPolicy hvis appen skal være tilgjengelig i QX
- [ ] `.nais/naiserator-prod.yaml` — AD-gruppe, env vars, outbound accessPolicy
- [ ] `src/config/appConfig.ts` — ny app-oppføring
- [ ] `src/pages/<rute>/[...proxy].ts` — ny API-proxy
- [ ] `src/pages/<rute>.astro` — ny side
- [ ] `mock/auth/adGroups.ts` — adGroupDevelopment lagt til i MOCK_USER_GROUPS

### Verifisering
- [ ] Siden laster uten feil i dev
- [ ] HTML fra mikrofrontend rendres korrekt (SSR)
- [ ] Tilgangskontroll fungerer (bare AD-gruppemedlemmer ser appen)
- [ ] Env vars er definert i Q1 og prod-naiserator, og i QX-naiseratoren hvis appen skal være tilgjengelig der
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
