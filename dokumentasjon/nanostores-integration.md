# Nanostores Integration Guide

## Overview

Utbetalingsportalen bruker [Nanostores](https://github.com/nanostores/nanostores) for delt state-håndtering mellom mikrofrontends. Dette gjør det mulig å dele data og navigere mellom forskjellige apper med kontekst.

## Arkitektur

### Store Registry

Stores blir eksponert globalt via `window.__UTBETALINGSPORTALEN_STORES__` slik at alle mikrofrontends kan aksessere dem uavhengig av hvordan de er lastet.

```typescript
// Initialisert automatisk i Layout.astro
window.__UTBETALINGSPORTALEN_STORES__ = {
  selectedId,
  sharedContext,
  setSelectedId,
  clearSelectedId,
  setSharedContext,
  clearSharedContext,
};
```

### Tilgjengelige Stores

#### `selectedId`

En atom store for å dele en enkelt ID mellom apper (f.eks. oppdrag ID, person ID).

**Persistence**: Lagres i sessionStorage som `utbetalingsportalen:selectedId`

```typescript
type SelectedId = string | null;
```

#### `sharedContext`

En map store for å dele kompleks kontekst mellom apper.

**Persistence**: Lagres i sessionStorage som `utbetalingsportalen:sharedContext`

```typescript
type SharedContext = {
  currentOppdrag?: string;
  currentKontonummer?: string;
  navigationHistory?: string[];
};
```

### Persistence med SessionStorage

Stores bruker sessionStorage for å bevare state mellom sideoppdateringer:

- **Persisterer**: Så lenge browser-taben er åpen
- **Nullstilles**: Når taben lukkes eller ny sesjon startes
- **Storage keys**:
  - `utbetalingsportalen:selectedId`
  - `utbetalingsportalen:sharedContext`

**Debugging**: Sjekk Application → Session Storage i DevTools for å se lagret state.

## Bruk i Shell-komponenter (Astro)

For komponenter som er del av shell-applikasjonen:

```tsx
import { useSharedId, useSharedContext, getStores } from "@hooks/useSharedStore";

function MyComponent() {
  // Les state
  const selectedId = useSharedId();
  const context = useSharedContext();

  // Oppdater state
  const stores = getStores();

  const handleClick = () => {
    stores?.setSelectedId("12345");
    stores?.setSharedContext({
      currentOppdrag: "OPPDRAG-001",
      navigationHistory: ["/attestasjon"],
    });
  };

  return <div>{selectedId}</div>;
}
```

## Bruk i Mikrofrontends

Mikrofrontends må aksessere stores via window-objektet siden de lastes som separate bundles:

### 1. Opprett tilsvarende hooks i mikrofrontenden

```typescript
// filepath: src/hooks/useSharedStore.ts (i mikrofrontend)
import { useStore } from "@nanostores/react";

export function useSharedId() {
  const stores = window.__UTBETALINGSPORTALEN_STORES__;
  if (!stores) {
    throw new Error("Stores ikke initialisert");
  }
  return useStore(stores.selectedId);
}

export function useSharedContext() {
  const stores = window.__UTBETALINGSPORTALEN_STORES__;
  if (!stores) {
    throw new Error("Stores ikke initialisert");
  }
  return useStore(stores.sharedContext);
}

export function getStores() {
  return window.__UTBETALINGSPORTALEN_STORES__;
}
```

### 2. Legg til TypeScript typing

```typescript
// filepath: src/types/global.d.ts (i mikrofrontend)
declare global {
  interface Window {
    __UTBETALINGSPORTALEN_STORES__?: {
      selectedId: import("nanostores").WritableAtom<string | null>;
      sharedContext: import("nanostores").MapStore<{
        currentOppdrag?: string;
        currentKontonummer?: string;
        navigationHistory?: string[];
      }>;
      setSelectedId: (id: string) => void;
      clearSelectedId: () => void;
      setSharedContext: (context: any) => void;
      clearSharedContext: () => void;
    };
  }
}

export {};
```

### 3. Bruk i komponenter

```tsx
import { useSharedId, getStores } from "./hooks/useSharedStore";

function AttestasjonList() {
  const stores = getStores();

  const handleOppdragClick = (oppdragId: string) => {
    // Sett ID i shared state
    stores?.setSelectedId(oppdragId);

    // Naviger til oppdragsinfo
    window.location.href = `/oppdragsinfo?oppdrag=${oppdragId}`;
  };

  return (
    <div>
      <button onClick={() => handleOppdragClick("12345")}>
        Vis oppdrag 12345
      </button>
    </div>
  );
}
```

```tsx
import { useSharedId } from "./hooks/useSharedStore";
import { useEffect } from "react";

function OppdragsinfoSearch() {
  const selectedId = useSharedId();

  useEffect(() => {
    // Automatisk søk hvis ID er satt
    if (selectedId) {
      performSearch(selectedId);
    }
  }, [selectedId]);

  return <div>Søker etter: {selectedId}</div>;
}
```

## Avhengigheter i Mikrofrontends

Legg til nanostores i mikrofrontend `package.json`:

```bash
pnpm add nanostores @nanostores/react
```

## Best Practices

### 1. Rydd opp etter navigasjon

```tsx
useEffect(() => {
  return () => {
    // Rydd opp når komponenten unmounter
    const stores = getStores();
    stores?.clearSelectedId();
  };
}, []);
```

### 2. Defensive checking

Sjekk alltid at stores er tilgjengelig før bruk:

```tsx
const stores = getStores();
if (stores) {
  stores.setSelectedId(id);
}
```

### 3. Type safety

Bruk TypeScript og definer typer for shared context:

```typescript
type SharedContext = {
  currentOppdrag?: string;
  currentKontonummer?: string;
  navigationHistory?: string[];
};
```

### 4. Ikke overbruk

Bruk nanostores kun for:

- Kommunikasjon mellom mikrofrontendender
- Navigasjons-kontekst
- Deling av state

Bruk lokal state (useState, Context) for app-intern state.

## Eksempel Use Case: Attestasjon → Oppdragsinfo

### Attestasjon (sender)

```tsx
function AttestasjonRow({ oppdrag }) {
  const stores = getStores();

  const handleViewDetails = () => {
    stores?.setSharedContext({
      currentOppdrag: oppdrag.id,
      navigationHistory: ["/attestasjon"],
    });

    window.location.href = `/oppdragsinfo?oppdrag=${oppdrag.id}`;
  };

  return (
    <tr>
      <td>{oppdrag.id}</td>
      <td>
        <button onClick={handleViewDetails}>Gå til Oppdragsinfo</button>
      </td>
    </tr>
  );
}
```

### Oppdragsinfo (mottaker)

```tsx
function OppdragsinfoPage() {
  const context = useSharedContext();
  const [oppdragData, setOppdragData] = useState(null);

  useEffect(() => {
    if (context.currentOppdrag) {
      fetchOppdragData(context.currentOppdrag).then(setOppdragData);
    }
  }, [context.currentOppdrag]);

  return (
    <div>
      {context.navigationHistory && (
        <button onClick={() => (window.location.href = context.navigationHistory[0])}>
          ← Tilbake til {context.navigationHistory[0]}
        </button>
      )}
      {oppdragData && <OppdragDetails data={oppdragData} />}
    </div>
  );
}
```

## Testing

### Verifiser at stores er initialisert

1. **Åpne browser DevTools** (F12)
2. **Gå til Console-fanen**
3. Du skal se en blå melding: `[Utbetalingsportalen] Nanostores initialisert`
4. Skriv `window.__UTBETALINGSPORTALEN_STORES__` i konsollen
5. Du skal se et objekt med alle stores og funksjoner

### Test sessionStorage persistence

1. Åpne konsollen og sett en verdi:
   ```javascript
   window.__UTBETALINGSPORTALEN_STORES__.setSelectedId("TEST-123");
   ```
2. Refresh siden (F5)
3. Sjekk verdien er bevart:
   ```javascript
   window.__UTBETALINGSPORTALEN_STORES__.selectedId.get();
   ```

### Test med StoreExample-komponenten

For visuell testing, legg til eksempelkomponenten midlertidig:

```astro
// src/pages/index.astro
import { StoreExample } from "@components/common/StoreExample";

<StoreExample client:only="react" />
```

Komponenten viser alle funksjoner og lar deg teste persistence ved sideoppdatering.

## Feilsøking

### "Stores not initialized"

**Årsak**: Store registry er ikke initialisert før komponenten prøver å aksessere den.

**Løsning**: Verifiser at Layout.astro kjører `initializeStoreRegistry()` scriptet. Sjekk console for initialiseringsmelding.

### Stores er undefined i mikrofrontend

**Årsak**: Mikrofrontenden lastes før shell-applikasjonen har initialisert stores.

**Løsning**: 
1. Legg til defensive checks: `if (!stores) return null;`
2. Bruk React Suspense for å vente på initialisering
3. Sjekk at mikrofrontend laster etter shell-app

### State persisterer ikke ved reload

**Årsak**: Stores bruker allerede sessionStorage - dette skal fungere.

**Løsning**:
1. Sjekk DevTools → Application → Session Storage
2. Verifiser at nøklene `utbetalingsportalen:selectedId` og `utbetalingsportalen:sharedContext` eksisterer
3. Sjekk console for sessionStorage-feil
4. Sjekk at nettleseren tillater sessionStorage (ikke private/incognito mode med begrenset storage)

### Console-feil: "Failed to save to sessionStorage"

**Årsak**: SessionStorage-kvote overskrides eller storage er deaktivert.

**Løsning**:
1. Reduser mengden data som lagres
2. Sjekk om incognito/private mode er aktivert
3. Verifiser at nettleseren støtter sessionStorage

## Videre Utvikling

- [ ] Implementer state change logging for debugging
- [ ] Legg til DevTools extension for state inspection
- [ ] Utvid SharedContext med flere felt etter behov
- [ ] Legg til state validation med Zod
- [ ] Implementer undo/redo-funksjonalitet
