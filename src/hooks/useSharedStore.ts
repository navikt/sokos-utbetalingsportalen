import { useStore } from "@nanostores/react";
import { getStores } from "@utils/storeRegistry";

export function useSharedId() {
  const stores = getStores();
  if (!stores) {
    throw new Error(
      "Stores not initialized. Ensure the store registry is initialized before using this hook.",
    );
  }
  return useStore(stores.selectedId);
}

export function useSharedContext() {
  const stores = getStores();
  if (!stores) {
    throw new Error(
      "Stores not initialized. Ensure the store registry is initialized before using this hook.",
    );
  }
  return useStore(stores.sharedContext);
}

export { getStores };
