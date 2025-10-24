# Stores

State management med [Nanostores](https://github.com/nanostores/nanostores) for deling av state mellom Astro islands og mikrofrontends, basert på [Astro's anbefaling](https://docs.astro.build/en/recipes/sharing-state-islands/).

## Struktur

- **`shared.ts`** - Enkelt atom store for valgt ID
- **`index.ts`** - Eksporterer alle stores

## Quick Start

```tsx
import { useStore } from "@nanostores/react";
import { selectedId } from "@stores/shared";

function MyComponent() {
  const id = useStore(selectedId);

  return (
    <div>
      <p>ID: {id}</p>
      <button onClick={() => selectedId.set("12345")}>Set ID</button>
    </div>
  );
}
```

Eller bruk custom hook:

```tsx
import { useSharedId } from "@hooks/useSharedStore";
import { selectedId } from "@stores/shared";

function MyComponent() {
  const id = useSharedId();

  return (
    <button onClick={() => selectedId.set("12345")}>Current ID: {id}</button>
  );
}
```

## Dokumentasjon

Se [dokumentasjon/nanostores-integration.md](../../dokumentasjon/nanostores-integration.md) for komplett guide.
