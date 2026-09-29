---
applyTo: "src/**/*.test.ts,src/**/*.test.tsx"
---

# Testing — utbetalingsportalen

Vitest via `getViteConfig` fra Astro (se `vitest.config.ts`). Tester ligger ved siden av filen de tester, som `formatNameFromToken.test.ts`.

```bash
pnpm vitest run     # Kjør én gang
pnpm vitest         # Watch-modus
```

## Dagens testoppsett

Prosjektet har kun enhetstester av rene funksjoner. Det finnes ingen DOM-testmiljø: verken `@testing-library/react`, `@testing-library/user-event` eller `jsdom` er installert, og `vitest.config.ts` setter ingen `environment`.

Skriv derfor enhetstester av ren logikk som standard. Gode kandidater er `src/utils/`-funksjoner som `formatNameFromToken`, `accessControl` og `audience`.

## Struktur

```ts
import { describe, expect, it } from "vitest";
import { formatNameFromToken } from "./formatNameFromToken";

describe("formatNameFromToken", () => {
	it("should reverse name format when comma-separated (Azure AD format)", () => {
		expect(formatNameFromToken("Nilsen, Tom")).toBe("Tom Nilsen");
	});
});
```

## Testdata

Bruk beskrivende konstanter, ikke magiske verdier:

```ts
const GYLDIG_SAKID = "2024-123456";
const UGYLDIG_SAKID = "";
```

Bruk aldri ekte fødselsnumre eller ekte persondata i tester. Syntetiske AD-grupper finnes i `mock/auth/adGroups.ts`.

## Tilgangskontroll

Tilganger kommer fra `Astro.locals.userData.groups` og sjekkes med `hasAccessToApp` i `src/utils/accessControl.ts`. Det finnes ingen `useUserGroups`-hook.

AD-grupper er UUID-er, ikke lesbare navn:

```ts
import { hasAccessToApp } from "@utils/accessControl";

const ATTESTASJON_DEV_GRUPPE = "0de8d01f-8ad0-4391-841c-55392956bc17";

it("gir tilgang når brukeren har riktig AD-gruppe", () => {
	expect(hasAccessToApp([ATTESTASJON_DEV_GRUPPE], attestasjonApp)).toBe(true);
});
```

🔴 **Rød sone** — tilgangskontroll er sikkerhetskritisk. Skriv disse testene selv.

## Komponenttesting

Komponenttester krever at avhengighetene installeres først:

```bash
pnpm add -D @testing-library/react @testing-library/user-event jsdom
```

Deretter må `environment: "jsdom"` settes i `vitest.config.ts`. Ikke skriv komponenttester som forutsetter disse pakkene før de faktisk er lagt til.

Når oppsettet er på plass: test atferd, ikke implementasjon, og prioriter spørringer i denne rekkefølgen:

1. `getByRole` — semantisk og tilgjengelighetsvennlig
2. `getByLabelText` — for skjemaelementer
3. `getByText` — for synlig tekst
4. `getByTestId` — siste utvei

```tsx
// ❌ Tester intern state
expect(component.state.isOpen).toBe(true);

// ✅ Tester det brukeren ser
expect(screen.getByRole("dialog")).toBeVisible();
```
