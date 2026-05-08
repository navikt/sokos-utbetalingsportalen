# Copilot Review Instructions — sokos-utbetalingsportalen

Du gjennomgår kode i et Astro-basert mikrofrontend-container for NAVs utbetalingsportal. TypeScript + React + CSS Modules + Aksel designsystem. Dette er et kritisk finanssystem for norsk offentlig forvaltning.

## Prioriter disse sjekkene

### 🔴 Sikkerhet og personvern (alltid kommenter)

- **PII i logger** — Flagg umiddelbart hvis `console.log`, `logger` eller lignende logger fødselsnummer, navn, adresse eller andre personopplysninger. Logg heller referansenummer eller sakId.
- **Hardkodede hemmeligheter** — API-nøkler, tokens eller passord som ikke er hentet fra miljøvariabler.
- **Tilgangskontroll** — Sensitiv informasjon som rendres uten sjekk av AD-grupper eller tilganger.

### 🟠 Kode­kvalitet (kommenter ved avvik)

- **Kommentarer som forklarer hva koden gjør** — Koden skal være selvdokumenterende. Be om refaktorering til beskrivende navn i stedet for kommentarer.
- **Manglende TypeScript-typing** — Props uten eksplisitt `interface`, `any`-typer uten begrunnelse, eller manglende returtyper på funksjoner.
- **Komponenter med mer enn ett ansvar** — Flett ut til separate komponenter.
- **Kompleks logikk inline i JSX** — Ekstraher til navngitte funksjoner eller custom hooks.

### 🟡 React og Astro (kommenter ved avvik)

- **Mikrofrontender uten ErrorBoundary** — Alle dynamisk lastede komponenter skal wrappes.
- **Manglende Suspense-fallback** — Async-komponenter trenger loading-tilstand.
- **`React.lazy()` brukt uten feilhåndtering** — Sjekk at det finnes en ErrorBoundary i nærheten.
- **Unødvendige re-renders** — Tomme eller feil dependency arrays i `useEffect`/`useMemo`/`useCallback`.
- **Direkte import av React/ReactDOM i klientkode** — Disse leveres via importmap, ikke som bundlede pakker.

### 🟢 CSS Modules (kommenter ved avvik)

- **Avvik fra BEM-lignende navngiving** — Bruk `.component__element--modifier`-mønsteret.
- **Hardkodede farger eller størrelser** — Bruk Aksel tokens i stedet.
- **Egne UI-komponenter der Aksel har en ekvivalent** — Foretrekk alltid `@navikt/ds-react`.

### ⚪ Ikke kommenter på

- Engelske fagtermer i norsk kode (f.eks. `component`, `handler`, `middleware`)
- Testdata og fixtures
- Kode-eksempler i dokumentasjon
- Stilistiske preferanser som ikke bryter prosjektets konvensjoner

## Tone og format

- Vær konkret: vis hva som er galt og hvorfor, gjerne med et kodeeksempel på rettingen.
- Skill mellom **blokkerende funn** (sikkerhet, PII) og **forbedringsforslag** (kvalitet, stil).
- Hold kommentarer korte. Ikke gjenta det åpenbare.
- Skriv på norsk med mindre kodeeksempelet krever engelsk.
