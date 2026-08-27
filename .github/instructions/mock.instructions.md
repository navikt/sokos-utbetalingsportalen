---
applyTo: "mock/**/*.ts"
---

# Mock-server — utbetalingsportalen

Hono-basert mock-server for lokal utvikling. Starter automatisk sammen med
`pnpm dev`/`pnpm dev:mock` (og kan også startes separat via `tsx mock/server.ts`) på port 3001.

## Struktur

```
mock/
  server.ts              # Hono-app med CORS og ruting (mikrofrontend-bundles)
  microfrontends/
    placeholderBundle.ts # Genererer placeholder-UI for mikrofrontender uten lokal instans
    localIframeBundle.ts # Genererer iframe-bundle mot lokalt kjørende mikrofrontend
  auth/
    adGroups.ts              # AD-gruppe-UUID-er for lokal testbruker
    devUser.ts               # Syntetisk bruker (navn/NAVident/grupper) for `pnpm dev`
    generate-oauth-config.ts # Genererer mock-oauth-config.json fra MOCK_USER
    mock-oauth-config.json   # Generert artefakt (gitignored), lest av mock-oauth2-server
```

## Kjøre en mikrofrontend lokalt (iframe mot lokal dev-server)

Ingen kodeendring nødvendig. Sett `LOCAL_MICROFRONTENDS` i `.env.template`:

```bash
LOCAL_MICROFRONTENDS=sokos-up-min-tjeneste=5174
```

`naisAppName` og `route` hentes automatisk fra `appConfig.ts` — oppgi kun
porten mikrofrontenden kjører på. Er ikke appen nevnt i
`LOCAL_MICROFRONTENDS` (eller er den ikke tilgjengelig på oppgitt port), vises
`placeholderBundle.ts`-komponenten automatisk.

## CORS

`server.ts` tillater kun forespørsler fra origins definert i `ALLOWED_ORIGINS`
i `.env.template` (kommaseparert). Legg til eller fjern porter der — ingen
kodeendring nødvendig.

`pnpm dev` laster ikke `.env.template` og bruker derfor alltid fallback-listen
(`4321`/`4322`/`3000`) i koden. `pnpm dev:mock` laster alltid `.env.template`
og bruker verdien derfra.

```bash
ALLOWED_ORIGINS=http://localhost:4321,http://localhost:4322,http://localhost:3000
```

## Mønstre

Mock-serveren leser `appConfig` for å vite hvilke mikrofrontender som finnes. Nye mock-endepunkter legges til i `server.ts` som Hono-ruter:

```ts
api.get("/min-tjeneste/api/data", (c) => {
  return c.json({ resultat: "mock-data" });
});
```

Ikke importer produksjonskode som avhenger av Nais-miljøvariabler direkte i mock — bruk hardkodede testverdier.
