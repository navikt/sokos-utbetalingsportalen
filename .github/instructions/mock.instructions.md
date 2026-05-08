---
applyTo: "mock/**/*.ts"
---

# Mock-server — utbetalingsportalen

Hono-basert mock-server for lokal utvikling. Starter med `pnpm dev:mock` på port 3000.

## Struktur

```
mock/
  server.ts              # Hono-app med CORS og ruting
  microfrontends/
    mock.ts              # Genererer placeholder-UI for mikrofrontender uten lokal instans
    local.ts             # Proxyer til lokalt kjørende mikrofrontend via iframe
```

## Legge til en ny mikrofrontend i mock

I `mock/server.ts` — legg til i `localMicrofrontends`:

```ts
"sokos-up-min-tjeneste": {
  port: 5174,
  route: "/min-tjeneste",
  enabled: true,
},
```

- `enabled: true` → bruker lokal instans på `port` via iframe (`local.ts`)
- `enabled: false` → viser placeholder-komponent (`mock.ts`)

## Mønstre

Mock-serveren leser `appConfig` for å vite hvilke mikrofrontender som finnes. Nye mock-endepunkter legges til i `server.ts` som Hono-ruter:

```ts
api.get("/min-tjeneste/api/data", (c) => {
  return c.json({ resultat: "mock-data" });
});
```

Ikke importer produksjonskode som avhenger av Nais-miljøvariabler direkte i mock — bruk hardkodede testverdier.
