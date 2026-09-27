---
applyTo: "src/pages/**/*.ts"
---

# API-ruter og proxy — utbetalingsportalen

API-ruter i `src/pages/` er enten interne helseendepunkter eller OBO-proxy-ruter mot backend-tjenester.

## Proxy-ruter mot backend

Bruk alltid `routeProxyWithOboToken` — aldri videresend token direkte. Funksjonen bytter Azure AD-token til OBO-token (on-behalf-of) for riktig audience:

```ts
import { routeProxyWithOboToken } from "@utils/server/proxy";
import type { APIRoute } from "astro";

export const ALL: APIRoute = routeProxyWithOboToken({
  apiProxy: `${process.env.MIN_TJENESTE_PROXY}`,
  apiUrl: `${process.env.MIN_TJENESTE_URL}`,
  audience: `${process.env.MIN_TJENESTE_AUDIENCE}`,
});
```

Plasser filen i `src/pages/<tjenestenavn>/[...proxy].ts`. Miljøvariablene settes i Nais-manifestet.

`routeProxyWithOboToken` gjør mer enn å bytte token. Den lager også et OpenTelemetry-span per forespørsel, propagerer trace-headere til backend, og skriver auditlogg med `teamLogger`. Behold denne funksjonen som eneste vei ut til backend, slik at tracing og auditlogg blir likt for alle tjenester.

🔴 **Rød sone** — proxy-logikk og OBO-token-bytte skal forstås manuelt. Ikke endre `routeProxyWithOboToken` uten å forstå token-flyten.

## Interne endepunkter

`/api/internal/isAlive`, `/api/internal/isReady` og `/api/internal/metrics` skal alltid være tilgjengelige uten autentisering. Middleware slipper dem gjennom via `isInternal(context)`, som matcher på `/internal` i URL-en. Nais-manifestene peker på de samme stiene, og `autoLoginIgnorePaths` unntar `/api/internal/*` fra Wonderwall-innlogging.

```ts
export async function GET() {
	return new Response(null, { status: 200 });
}
```

## Middleware og autentisering

Autentisering skjer i `src/middleware/index.ts` med `@navikt/oasis`:

- `getToken()` — henter Bearer-token fra request-headere
- `validateAzureToken()` — validerer og parser Azure AD JWT
- `context.locals.userData` — inneholder `NAVident`, `name`, `groups` etter vellykket validering
- `context.locals.token` — raw token, brukes av proxy for OBO-bytte

Lokalt (`getServerSideEnvironment() === "local"`, uten `pnpm dev:mock`) bypasses auth og `userData` settes til `MOCK_USER` fra `mock/auth/devUser.ts` (syntetisk NAVident/navn/AD-grupper).

```ts
const token = getToken(context.request.headers);
const validatedToken = await validateAzureToken(token);

if (!validatedToken.ok) {
  return context.redirect(loginPath);
}
```

🔴 **Rød sone** — ikke endre middleware-autentiseringslogikk uten grundig forståelse og gjennomgang.

## Aldri logg tokens eller PII

```ts
// ❌
logger.info(`Token: ${token}`);
logger.error(`Feil for ${userData.NAVident}`);

// ✅
logger.error("Token-validering feilet", { errorType: validatedToken.errorType });
```
