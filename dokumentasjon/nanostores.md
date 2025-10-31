# Nanostores Guide

## Oversikt

Utbetalingsportalen bruker [Nanostores](https://github.com/nanostores/nanostores) for delt state mellom mikrofrontends. Dette vil bli satt i `localStorage` by default. Vi vil helst bruke `sessionStorage` så eventuelle sensitive opplysninger ikke blir værende. Se eksemplene for hvordan å gjøre dette. Bruk en relevant key for å unngå kollisjoner.

Basert på [Astro's anbefaling for deling av state mellom islands](https://docs.astro.build/en/recipes/sharing-state-islands/)

### Installasjon i mikrofrontend

```bash
npm install @nanostores/react @nanostores/persistent
pnpm add @nanostores/react @nanostores/persistent
```

### Opprette stores

Lag for eksempel en `stores`-mappe i prosjektet med en `shared.ts`-fil for delte stores:
PS: Man kan kalle filen hva man ønsker, dette er kun et forslag.

Eksempel 1: Enkel string store

```typescript
import { persistentAtom, setPersistentEngine } from "@nanostores/persistent";

if (typeof window !== "undefined") { // for å bruke sessionStorage kun i nettleseren
  setPersistentEngine(sessionStorage, {
    addEventListener() {},
    removeEventListener() {},
    perKey: false,
  });
}

export const selectedId = persistentAtom<string | null>(
  "utbetalingsportalen:selectedId", // bruk en unik key som passer ditt prosjekt
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

Eksempel 2: Objekt store

```typescript
import { persistentAtom, setPersistentEngine } from "@nanostores/persistent";
import { SokeData } from "@types/SokeData";

if (typeof window !== "undefined") { // for å bruke sessionStorage kun i nettleseren
  setPersistentEngine(sessionStorage, {
    addEventListener() {},
    removeEventListener() {},
    perKey: false,
  });
}

export const sokeData = persistentAtom<SokeData | null>(
  "utbetalingsportalen:sokeData", // bruk en unik key som passer ditt prosjekt
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

## Bruk i React-komponenter

### Metode 1: Med hook (anbefalt for reaktivitet)

String store:

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

Objekt store:

```tsx
import { useStore } from "@nanostores/react";
import { sokeData } from "@types/SokeData";

function MyComponent() {
  const data = useStore(sokeData); // skal trigge rerendering ved endring av state

  const handleSave = () => {
    sokeData.set({
      gjelderId: "12345678901",
      fagSystemId: "ABC-123",
      fagGruppe: "OSTBAR",
      alternativer: "ALLE",
    });
  };

  return (
    <div>
      <p>Gjelder ID: {data?.gjelderId}</p>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
```

### Metode 2: Direkte (hvis du bare setter verdier)

String store:

```tsx
import { selectedId } from "@stores/shared";

function MyComponent() {
  const handleClick = () => {
    selectedId.set("12345");
  };

  return <button onClick={handleClick}>Set ID</button>;
}
```

Objekt store:

```tsx
import { sokeData } from "@stores/shared";

function MyComponent() {
  const handleClick = () => {
    sokeData.set({
      gjelderId: "12345678901",
      fagSystemId: "ABC-123",
      fagGruppe: "OSTBAR",
      alternativer: "ALLE",
    });
  };

  return <button onClick={handleClick}>Save Data</button>;
}
```

## Navigering mellom mikrofrontends

### Eksempel: Send ID ved navigering

#### Avsender

```tsx
import { selectedId } from "@stores/shared";

export default function Treffliste() {
  const navigateToMikrofrontend = (oppdragsId: string) => {
    selectedId.set(oppdragsId);
    window.location.href = "/mikrofrontend";
  };

  return (
    <Button onClick={() => navigateToMikrofrontend("12345")}>
      Gå til Mikrofrontend
    </Button>
  );
}
```

#### Mottaker

```tsx
import { useStore } from "@nanostores/react";
import { selectedId } from "@stores/shared";

export default function Sok() {
  const oppdragsId = useStore(selectedId);

  useEffect(() => {
    if (oppdragsId) {
      console.log("Mottatt ID:", oppdragsId); // for debugging
      // fetch med ID'en her
      
      selectedId.set(null); // Rydd opp etter bruk hvis denne ikke skal brukes videre
    }
  }, [oppdragsId]);

  return (
    <div>
      {oppdragsId && <Alert>Søker etter: {oppdragsId}</Alert>}
    </div>
  );
}
```

## Best Practices

### 1. Bruk hooks for reaktivitet

```tsx
// ✅ Komponenten re-rendres ved endringer
import { useStore } from "@nanostores/react";
import { selectedId, sokeData } from "@stores/shared";

const id = useStore(selectedId);
const data = useStore(sokeData);
```

```tsx
// ❌ Komponenten re-rendres IKKE
import { selectedId, sokeData } from "@stores/shared";

const id = selectedId.get();
const data = sokeData.get();
```

### 2. Rydd opp når nødvendig

```tsx
import { selectedId, sokeData } from "@stores/shared";

useEffect(() => {
  return () => {
    selectedId.set(null);
    sokeData.set(null);
  };
}, []);
```
