# Copilot-instruksjoner for Utbetalingsportalen

## Om prosjektet

Astro-basert mikrofrontend-container for Navs utbetalingsportal. TypeScript og React-komponenter med CSS Modules og Aksel, Navs designsystem.

## Kodestandard

### Filnavn

- **Komponenter**: `PascalCase.tsx`
- **Sider**: `kebab-case.astro`
- **CSS Modules**: `ComponentName.module.css`
- **Proxy-ruter**: `[...proxy].ts`

Se `.github/instructions/` for filtype-spesifikke regler (CSS, testing, API-proxy, React/Astro-mønstre).

## Arbeidsflyt

### Ny funksjonalitet

1. **Avklar ansvaret**: hva er den ene tingen komponenten gjør?
2. **Definer TypeScript-typer**: props, state og returtyper. Bruk `type` for props, slik resten av koden gjør
3. **Start minimalt**: enkleste versjon først, så itererer du
4. **Håndter feil**: loading-tilstand, error boundaries og tilgangskontroll
5. **Stil med CSS Modules**: følg BEM-lignende navngiving
6. **Test integrasjonen**: verifiser mot mikrofrontend-oppsettet

### Refaktorering

- **Trekk ut gjentatt JSX** til egne render-funksjoner
- **Flytt kompleks logikk** til custom hooks
- **Del opp store komponenter** etter ansvar
- **Bruk komposisjon** i stedet for dyp prop drilling

### Ytelse

- Bruk `server:defer` for ikke-kritiske komponenter
- Vis loading-tilstand med skeletons
- Unngå unødvendige re-renders (sjekk dependency arrays)
- Lazy load mikrofrontender og store komponenter

### Avhengigheter

- Bruk `pnpm add <pakke>`
- Foretrekk Aksel-komponenter fremfor egne implementasjoner
- React og React-DOM leveres via importmap, ikke i klient-bundelen

## Ytelse og observability

- **Lazy loading**: mikrofrontender lastes dynamisk med `React.lazy()`
- **Error boundaries**: wrap mikrofrontender i `ApmErrorBoundary` fra `@nais/apm/react`, og send mikrofrontendens `naisAppName` som APM-kontekst
- **Overvåking**: `@nais/apm` for web vitals og feil, initialisert én gang i layouten
- **Logging**: strukturert logging med Pino (`logger` og `teamLogger`)
- **Metrikker**: Prometheus-registeret eksponeres på `/api/internal/metrics`
- **CDN**: eksterne avhengigheter serveres fra Nav CDN

## Norsk kontekst

- Grensesnittet er på norsk bokmål
- URL-er: norske ord translitterert til latinske tegn (ingen æ/ø/å)
- Følg WCAG 2.1 AA
- Domene: utbetaling av ytelser og økonomioppgaver i Nav
- Brukere: Nav-ansatte, blant annet økonomimedarbeidere og Nav Kontaktsenter

Dette er et kritisk finanssystem for norsk offentlig forvaltning. Følg sikkerhetspraksisen i `AGENTS.md`, og test grundig før deploy.
