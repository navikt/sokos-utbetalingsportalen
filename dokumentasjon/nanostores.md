# Nanostores Guide

## Oversikt

Utbetalingsportalen bruker [Nanostores](https://github.com/nanostores/nanostores) for delt state mellom mikrofrontends. Dette vil bli satt i `localStorage`.

Basert på [Astro's anbefaling for deling av state mellom islands](https://docs.astro.build/en/recipes/sharing-state-islands/)

### Installasjon i mikrofrontend

```bash
npm install @nanostores/react @nanostores/persistent
pnpm add @nanostores/react @nanostores/persistent
```

Eksempel for å lage en delt store for en enkel string `selectedId`:

Lag en `stores`-mappe i prosjektet med en `shared.ts`-fil for delte stores:

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

Eksempel for å lage en delt store for et søkeobjekt `SokeData`:

```typescript
import { persistentAtom } from "@nanostores/persistent";
import { SokeData } from "@types/SokeData";

export const sokeData = persistentAtom<SokeData | null>(
  "utbetalingsportalen:sokeData",
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

```tsx
import { useStore } from "@nanostores/react";
import { sokeData } from "@types/SokeData";

function MyComponent() {
  const data = useStore(sokeData);

  const handleSave = () => {
    sokeData.set({
      gjelderId: "12345678901",
      fagSystemId: "ABC-123",
      fagGruppe: "OSTBAR",
      alternativer: "ALLE",
    });
  };

  return <div>Gjelder ID: {data?.gjelderId}</div>;
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

## Best Practices

### 1. Bruk hooks for reaktivitet

```tsx
// komponenten re-rendres ved endringer
import { useStore } from "@nanostores/react";
import { selectedId } from "@stores/shared";

const id = useStore(selectedId);
```

```tsx
// komponenten re-rendres ikke
import { selectedId } from "@stores/shared";

const id = selectedId.get(); 
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
