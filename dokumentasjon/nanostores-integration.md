# Nanostores Integration Guide

## Overview

Utbetalingsportalen bruker [Nanostores](https://github.com/nanostores/nanostores) for delt state-håndtering mellom mikrofrontends. Dette gjør det mulig å dele data og navigere mellom forskjellige apper med kontekst.

## Arkitektur

Basert på [Astro's anbefaling for deling av state mellom islands](https://docs.astro.build/en/recipes/sharing-state-islands/), bruker vi Nanostores direkte uten ekstra wrappere.

### Hvordan det fungerer

Alle komponenter som importerer samme store deler samme state

### Tilgjengelige Stores

#### `selectedId`

```typescript
import { persistentAtom } from "@nanostores/persistent";

export const selectedId = persistentAtom<string | null>(
  "utbetalingsportalen:selectedId",
  null,
  {
    encode: JSON.stringify,
    decode: (value) => {
      try {
        return JSON.parse(value);
      } catch {
        return null;
      }
    },
  },
);
```

**Bruk:**

```tsx
selectedId.set("12345");

const id = selectedId.get();

const id = useStore(selectedId);
```

## Bruk i React-komponenter

### Metode 1: Med hook (anbefalt for reaktivitet)

```tsx
import { useStore } from "@nanostores/react";
import { selectedId } from "@stores/shared";

function MyComponent() {
  const id = useStore(selectedId); // skal trigge rerendering ved endring av state

  return (
    <div>
      <p>Selected ID: {id}</p>
      <button onClick={() => selectedId.set("12345")}>Set ID</button>
    </div>
  );
}
```

### Metode 2: Direkte (hvis du bare setter verdier)

```tsx
import { selectedId } from "@stores/shared";

function MyComponent() {
  const handleClick = () => {
    selectedId.set("12345");
  };

  return <button onClick={handleClick}>Set ID</button>;
}
```

### Custom hook (optional)

```tsx
import { useSharedId } from "@hooks/useSharedStore";

function MyComponent() {
  const id = useSharedId(); // wrapper rundt useStore
}
```

## Best Practices

### 1. Bruk hooks for reaktivitet

```tsx
// Riktig - komponenten re-rendres ved endringer
import { useStore } from "@nanostores/react";
import { selectedId } from "@stores/shared";

const id = useStore(selectedId);
```

```tsx
// Feil - komponenten re-rendres IKKE
import { selectedId } from "@stores/shared";

const id = selectedId.get(); // Statisk verdi
```

### 2. Rydd opp når nødvendig

```tsx
import { clearSelectedId } from "@stores/shared";

useEffect(() => {
  return () => {
    clearSelectedId();
  };
}, []);
```

## Videre Utvikling

- [ ] Legg til flere stores etter behov (f.eks. `selectedKontonummer`, `selectedOppdrag`)
- [ ] Legg til TypeScript typer for komplekse data
- [ ] Logging av state-endringer for debugging
