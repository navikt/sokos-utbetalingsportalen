# AGENTS.md — sokos-utbetalingsportalen

Astro-basert mikrofrontend-container for NAVs utbetalingsportal. TypeScript + React + CSS Modules + Aksel designsystem.

## Kom i gang

```bash
pnpm install
pnpm dev            # Start utviklingsserver
pnpm dev:mock       # Start med mock-API (Hono)
```

## Bygg og valider

```bash
pnpm build          # astro check + astro build (begge må passere)
pnpm vitest         # Kjør enhetstester
pnpm biome:check    # Linting og formatering
pnpm stylelint:check  # CSS-linting
```

**Alle disse kommandoene må passere uten feil før du anser en oppgave som ferdig.**

## Pakkebehandler

Bruk alltid `pnpm`. Ikke bruk `npm` eller `yarn`.

```bash
pnpm add <pakke>          # Legg til avhengighet
pnpm add -D <pakke>       # Legg til dev-avhengighet
```

## Prosjektstruktur

```
src/
  components/     # Gjenbrukbare React-komponenter (PascalCase.tsx)
  pages/          # Astro-sider (kebab-case.astro) og API-ruter
  layouts/        # Astro-layouts
  config/         # Konfigurasjon og konstanter
  middleware/     # Astro middleware
  types/          # TypeScript-typer og interfaces
  utils/          # Hjelpefunksjoner
mock/             # Hono-basert mock-server for lokal utvikling
```

## Filnavnkonvensjoner

| Type | Konvensjon | Eksempel |
|------|-----------|---------|
| React-komponenter | `PascalCase.tsx` | `Header.tsx` |
| Astro-sider | `kebab-case.astro` | `min-side.astro` |
| CSS Modules | `ComponentName.module.css` | `Header.module.css` |
| API-ruter | `[...proxy].ts` | `[...proxy].ts` |

## Kodekonvensjoner

### TypeScript

- Alltid eksplisitt typing på komponent-props (bruk `interface`, ikke `type` for props)
- Bruk TypeScript-typer som dokumentasjon — ikke skriv kommentarer som forklarer hva kode gjør
- Skriv selvdokumenterende kode med beskrivende navn

### React-komponenter

- Én komponent per fil, én fil per ansvar
- Wrap mikrofrontender alltid med `ErrorBoundary`
- Bruk `Suspense` + fallback for async-komponenter
- Sjekk tilganger før sensitiv innhold rendres

### CSS Modules — BEM-lignende navngivning

```css
.component { }              /* Basis */
.component__element { }     /* Barn */
.component--modifier { }    /* Variant */
.component__element--state { } /* Tilstand */
```

### Ikke skriv kommentarer som forklarer hva koden gjør

```typescript
// ❌ Unngå
if (userGroups.includes(ADMIN_GROUP)) {
  // Enable admin mode
  setAdminMode(true);
}

// ✅ Foretrekk
if (hasAdminPermissions(userGroups)) {
  enableAdminMode();
}
```

## Aksel designsystem

- Bruk alltid Aksel-komponenter fremfor egne implementasjoner
- React og React-DOM er tilgjengelig via importmap — ikke importer dem direkte i klientkode
- Bruk spacing-tokens og layout-primitiver fra Aksel (`Box`, `HStack`, `VStack`, `HGrid`, `Page`)

## Ytelse

- Bruk `server:defer` for ikke-kritiske komponenter
- Lazy load mikrofrontender med `React.lazy()`
- Unngå unødvendige re-renders (sjekk dependency arrays)

## Sikkerhet og personvern

Dette er et kritisk finanssystem for norsk offentlig forvaltning.

- **Ikke logg PII** (fødselsnummer, navn, adresse) — logg heller sakId eller referansenummer
- Sjekk tilganger (AD-grupper) før sensitiv innhold rendres
- Secrets håndteres via Nais — aldri hardkod hemmeligheter

## Observability

- Grafana Faro for web vitals og feilsporing (allerede konfigurert i `src/components/observability/`)
- Pino + OpenTelemetry for strukturert logging

## Språk

- Grensesnitt på norsk bokmål
- URL-er: norske ord translitterert til latinske tegn (ingen æ/ø/å)
- Følg WCAG 2.1 AA for tilgjengelighet

## Røde soner — forstå dette selv

Følgende logikk er kritisk og bør skrives manuelt for å bygge forståelse:

- 🔴 Tilgangskontroll og AD-gruppe-sjekker
- 🔴 Mikrofrontend-routing og lazy loading-logikk
- 🔴 Proxy-logikk i API-ruter (`src/pages/api/`)

For rød-sone-kode: generer kun stubs med `TODO`-kommentarer og testskeletter — ikke full implementasjon.
