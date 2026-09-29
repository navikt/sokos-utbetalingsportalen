---
applyTo: "src/**/*.astro,src/**/*.tsx,src/middleware/**/*.ts"
---

# Astro + React — utbetalingsportalen

Astro SSR-container med React-mikrofrontender på Nais/GCP. Brukere er Nav-ansatte (saksbehandlere, økonomer). Dette er et kritisk finanssystem.

## Mikrofrontender

Alle mikrofrontender lastes med `React.lazy()` og skal alltid wrappes med `ApmErrorBoundary` fra `@nais/apm/react` og `Suspense`:

```tsx
import { ApmErrorBoundary } from "@nais/apm/react";

<React.Suspense fallback={<ContentLoader />}>
  <ApmErrorBoundary
    fallback={<ClientError />}
    context={{ microfrontend: naisAppName }}
  >
    <MicrofrontendBundle />
  </ApmErrorBoundary>
</React.Suspense>
```

Send alltid mikrofrontendens `naisAppName` i `context`. Uten det viser APM-rapporten bare containerens URL, og det er umulig å se hvilken mikrofrontend som feilet.

Bruk `server:defer` i `.astro`-filer for ikke-kritiske komponenter.

## Tilgangskontroll

Sjekk alltid AD-grupper før sensitiv informasjon rendres. Tilganger hentes fra `Astro.locals.userData.groups`:

```tsx
const hasAccess = userGroups.some((group) => ALLOWED_GROUPS.includes(group));
if (!hasAccess) return <NoAccess />;
```

🔴 **Rød sone** — tilgangskontroll-logikk skal skrives og forstås manuelt.

## React og ReactDOM

React og React-DOM leveres fra Nav CDN via importmap, ikke i klient-bundelen. Du importerer dem som vanlig i kildekoden:

```tsx
import React, { useMemo } from "react";
```

`astro.config.mjs` markerer `react`, `react/jsx-runtime`, `react-dom`, `react-dom/client` og `scheduler` som `external` i klientbygget, slik at importene løses mot importmappet i `src/layouts/Layout.astro`.

Versjonene i importmappet må holdes i synk med `package.json`. Oppgraderer du React der, må du oppdatere importmap-URL-ene i `Layout.astro` i samme endring, ellers kjører serveren og nettleseren ulike React-versjoner.

## Logging og personvern

**Aldri logg PII** (fødselsnummer, navn, adresse). Logg referansenummer eller sakId:

```tsx
// ❌
logger.error(`Feil for bruker ${fnr}`);

// ✅
logger.error(`Feil for sak ${sakId}`);
```
