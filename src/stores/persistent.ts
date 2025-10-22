import { atom, map, type WritableAtom, type MapStore } from "nanostores";

const isBrowser =
  typeof window !== "undefined" && typeof sessionStorage !== "undefined";

export function persistentAtom<T>(key: string, initial: T): WritableAtom<T> {
  const store = atom<T>(initial);

  if (isBrowser) {
    try {
      const stored = sessionStorage.getItem(key);
      if (stored !== null) {
        store.set(JSON.parse(stored));
      }
    } catch (error) {
      console.error(`Failed to load ${key} from sessionStorage:`, error);
    }

    store.subscribe((value) => {
      try {
        sessionStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Failed to save ${key} to sessionStorage:`, error);
      }
    });
  }

  return store;
}

export function persistentMap<T extends Record<string, any>>(
  key: string,
  initial: T,
): MapStore<T> {
  const store = map<T>(initial);

  if (isBrowser) {
    try {
      const stored = sessionStorage.getItem(key);
      if (stored !== null) {
        store.set(JSON.parse(stored));
      }
    } catch (error) {
      console.error(`Failed to load ${key} from sessionStorage:`, error);
    }

    store.subscribe((value) => {
      try {
        sessionStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Failed to save ${key} to sessionStorage:`, error);
      }
    });
  }

  return store;
}
