---
applyTo: "src/**/*.test.ts,src/**/*.test.tsx"
---

# Testing — utbetalingsportalen

Vitest + React Testing Library. Tester ligger ved siden av filen de tester.

## Struktur

```ts
import { describe, it, expect } from "vitest";

describe("MinKomponent", () => {
  it("viser tittel", () => {
    // ...
  });

  it("kaller onKlikk ved klikk på knapp", () => {
    // ...
  });
});
```

## React Testing Library

Test atferd, ikke implementasjon. Bruk semantiske spørringer:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("viser feilmelding ved ugyldig input", async () => {
  render(<MinKomponent />);
  await userEvent.click(screen.getByRole("button", { name: /send/i }));
  expect(screen.getByRole("alert")).toBeInTheDocument();
});
```

## Prioriter spørringer (høyest til lavest)

1. `getByRole` — semantisk og tilgjengelighetsvennlig
2. `getByLabelText` — for skjemaelementer
3. `getByText` — for synlig tekst
4. `getByTestId` — siste utvei

## Ikke test implementasjonsdetaljer

```tsx
// ❌ Tester intern state
expect(component.state.isOpen).toBe(true);

// ✅ Tester det brukeren ser
expect(screen.getByRole("dialog")).toBeVisible();
```

## Testdata

Bruk beskrivende konstanter, ikke magiske verdier:

```ts
const GYLDIG_SAKID = "2024-123456";
const UGYLDIG_SAKID = "";
```

## Tilgangskontroll i tester

Mock AD-grupper eksplisitt i tester som sjekker tilgang:

```tsx
vi.mock("../hooks/useUserGroups", () => ({
  useUserGroups: () => ["sokos-utbetalingsportalen-les"],
}));
```
