# Nanostores Integration Guide

## Overview

Utbetalingsportalen bruker [Nanostores](https://github.com/nanostores/nanostores) for delt state-håndtering mellom mikrofrontends. Dette gjør det mulig å dele data og navigere mellom forskjellige apper med kontekst.

## Arkitektur

Basert på [Astro's anbefaling for deling av state mellom islands](https://docs.astro.build/en/recipes/sharing-state-islands/), bruker vi Nanostores direkte uten ekstra wrappere.

### Hvordan det fungerer

Nanostores er framework-agnostisk og fungerer på tvers av alle Astro-islands automatisk:

```typescript
// src/stores/shared.ts
import { atom } from "nanostores";

export const selectedId = atom<string | null>(null);
```

Alle komponenter som importerer samme store deler samme state

### Tilgjengelige Stores

#### `selectedId`

En enkel atom store for å dele en ID mellom islands/mikrofrontends.

```typescript
export const selectedId = atom<string | null>(null);
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

### Eksempel: Fra Attestasjon til Oppdragsinfo

**Mikrofrontend A (Attestasjon)** - setter ID:
```tsx
import { selectedId } from "@stores/shared";

function AttestasjonList() {
  const handleClick = (id: string) => {
    selectedId.set(id);
    window.location.href = `/oppdragsinfo`;
  };

  return <button onClick={() => handleClick("12345")}>Vis oppdrag</button>;
}
```

**Mikrofrontend B (Oppdragsinfo)** - leser ID:
```tsx
import { useStore } from "@nanostores/react";
import { selectedId } from "@stores/shared";
import { useEffect } from "react";

function OppdragsinfoPage() {
  const id = useStore(selectedId);

  useEffect(() => {
    if (id) {
      console.log("Mottok ID fra forrige side:", id);
    }
  }, [id]);

  return <div>Viser oppdrag: {id}</div>;
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

### 2. Type safety

Bruk TypeScript og definer typer for shared context:

```typescript
type SharedContext = {
  currentOppdrag?: string;
  currentKontonummer?: string;
  navigationHistory?: string[];
};
```

### 3. Ikke overbruk

Bruk nanostores kun for:

- Kommunikasjon mellom komponenter/islands
- Kommunikasjon mellom mikrofrontends
- Navigasjons-kontekst
- Delt seleksjon/fokus

Bruk lokal state (useState, Context) for komponent-intern state.

### 4. Rydd opp når nødvendig

```tsx
import { clearSelectedId } from "@stores/shared";

useEffect(() => {
  return () => {
    clearSelectedId();
  };
}, []);
```

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

### Verifiser at stores fungerer

1. **Åpne browser DevTools** (F12)
2. **Gå til Console-fanen**
3. Test stores direkte:
   ```javascript
   // Import stores (hvis du er i en modul-kontekst)
   // eller test via komponenten
   ```

### Test sessionStorage persistence

1. Legg til StoreExample-komponenten (se under)
2. Sett verdier via UI
3. Refresh siden (F5)
4. Sjekk at verdiene er bevart
5. Verifiser i DevTools → Application → Session Storage:
   - `utbetalingsportalen:selectedId`
   - `utbetalingsportalen:sharedContext`

### Test med StoreExample-komponenten

For visuell testing, legg til eksempelkomponenten midlertidig:

```astro
// src/pages/index.astro
import { StoreExample } from "@components/common/StoreExample";

<StoreExample client:only="react" />
```

Komponenten viser alle funksjoner og lar deg teste persistence ved sideoppdatering.

### State nullstilles ved page reload

**Dette er forventet!** Stores er in-memory og nullstilles ved reload.

**Hvis vi trenger persistence**:

```typescript
// Legg til sessionStorage persistence
import { persistentAtom } from "@nanostores/persistent";

export const selectedId = persistentAtom<string | null>("selectedId", null);
```

## Videre Utvikling

- [ ] Legg til flere stores etter behov (f.eks. `selectedKontonummer`, `selectedOppdrag`)
- [ ] Implementer persistence med `@nanostores/persistent` hvis nødvendig
- [ ] Legg til TypeScript types for komplekse data
- [ ] Logging av state-endringer for debugging
