# Guide: Astro Mikrofrontend

Denne guiden viser hvordan du integrerer en server-side rendered Astro mikrofrontend i Utbetalingsportalen.

## Forutsetninger

- En Astro-applikasjon som kan deployes som mikrofrontend
- Tilgang til NAIS-konfigurasjonsfilene
- AD-grupper for dev og prod

## Steg 1: Konfigurer NAIS

### 1.1 Oppdater naiserator-filer

Legg til nødvendige miljøvariabler og tilgangspolicies i både `.nais/naiserator-q1.yaml` og `.nais/naiserator-prod.yaml`.

**Eksempel på miljøvariabler:**

```yaml
env:
  - name: SOKOS_EKSEMPEL_URL
    value: https://sokos-eksempel.dev-gcp.nais.io
  - name: SOKOS_EKSEMPEL_AUDIENCE
    value: api://dev-gcp.okonomi.sokos-eksempel/.default
```

### 1.2 Konfigurer tilgangspolicies

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

### 1.3 Åpne for innkommende trafikk

Legg til i mikrofrontend sin `naiserator.yaml`:

```yaml
accessPolicy:
  inbound:
    rules:
      - application: sokos-utbetalingsportalen
        namespace: okonomi
        cluster: dev-gcp
```

## Steg 2: Registrer applikasjonen

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
| `adGroupProduction` | Azure AD gruppe UUID for prod | `"xyz789..."` eller `PLACEHOLDER_AD_GROUP` |
| `route` | URL-path i portalen | `"/min-mikrofrontend"` |
| `naisAppName` | NAIS applikasjonsnavn | `"sokos-up-min-mikrofrontend"` |

**URL-navngivningsregler:**

- Bruk hele ord, ikke forkortelser
- Små bokstaver
- Bindestrek for å skille ord
- Translitterer norske tegn: Æ→AE, Ø→OE, Å→AA


## Steg 3: Opprett side i Utbetalingsportalen

Lag en ny `.astro`-fil under `src/pages/` med navnet på ruten (f.eks. `min-mikrofrontend.astro`):

```astro
---
import MicrofrontendWrapperServer from "@components/microfrontend/MicrofrontendWrapperServer.astro";
---

<MicrofrontendWrapperServer
  appTitle="Min Mikrofrontend"
  appUrl={process.env.SOKOS_EKSEMPEL_URL}
  appAudience={process.env.SOKOS_EKSEMPEL_AUDIENCE}
/>
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
