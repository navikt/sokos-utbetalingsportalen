---
applyTo: "src/**/*.astro,src/**/*.tsx,src/middleware/**/*.ts"
---

# Astro + React — utbetalingsportalen

Astro SSR-container med React-mikrofrontender på Nais/GCP. Brukere er NAV-ansatte (saksbehandlere, økonomer). Dette er et kritisk finanssystem.

## Mikrofrontender

Alle mikrofrontender lastes med `React.lazy()` og skal alltid wrappes med `ErrorBoundary` og `Suspense`:

```tsx
const MinMikrofrontend = React.lazy(() => import("./MinMikrofrontend"));

<ErrorBoundary>
  <Suspense fallback={<Loader />}>
    <MinMikrofrontend />
  </Suspense>
</ErrorBoundary>
```

Bruk `server:defer` i `.astro`-filer for ikke-kritiske komponenter.

## Tilgangskontroll

Sjekk alltid AD-grupper før sensitiv informasjon rendres. Tilganger hentes fra `Astro.locals.userData.groups`:

```tsx
const hasAccess = userGroups.some((group) => ALLOWED_GROUPS.includes(group));
if (!hasAccess) return <NoAccess />;
```

🔴 **Rød sone** — tilgangskontroll-logikk skal skrives og forstås manuelt.

## React og ReactDOM

Leveres via importmap fra NAV CDN. **Ikke importer dem direkte** i klientkode som bundlesi:

```tsx
// ❌ Ikke gjør dette i klientkode
import React from "react";

// ✅ Anta at React er tilgjengelig globalt via importmap
```

## Logging og personvern

**Aldri logg PII** (fødselsnummer, navn, adresse). Logg referansenummer eller sakId:

```tsx
// ❌
logger.error(`Feil for bruker ${fnr}`);

// ✅
logger.error(`Feil for sak ${sakId}`);
```
