import * as stores from "../stores";

declare global {
  interface Window {
    __UTBETALINGSPORTALEN_STORES__?: typeof stores;
  }
}

export function initializeStoreRegistry() {
  if (typeof window !== "undefined") {
    window.__UTBETALINGSPORTALEN_STORES__ = stores;

    console.log(
      "%c[Utbetalingsportalen] Nanostores initialisert",
      "color: #0067C5; font-weight: bold",
      {
        tilgjengeligeStores: Object.keys(stores),
        tilgang: "window.__UTBETALINGSPORTALEN_STORES__",
      },
    );
  }
}

export function getStores() {
  if (typeof window !== "undefined") {
    return window.__UTBETALINGSPORTALEN_STORES__;
  }
  return stores;
}
