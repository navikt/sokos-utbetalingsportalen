import { persistentAtom, persistentMap } from "./persistent";

export const selectedId = persistentAtom<string | null>(
  "utbetalingsportalen:selectedId",
  null,
);

export const sharedContext = persistentMap<{
  currentOppdrag?: string;
  currentKontonummer?: string;
  navigationHistory?: string[];
}>("utbetalingsportalen:sharedContext", {});

export function setSelectedId(id: string) {
  selectedId.set(id);
}

export function clearSelectedId() {
  selectedId.set(null);
}

export function setSharedContext(
  context?: Partial<typeof sharedContext.value>,
) {
  if (!context) return;

  if (context.currentOppdrag !== undefined) {
    sharedContext.setKey("currentOppdrag", context.currentOppdrag);
  }
  if (context.currentKontonummer !== undefined) {
    sharedContext.setKey("currentKontonummer", context.currentKontonummer);
  }
  if (context.navigationHistory !== undefined) {
    sharedContext.setKey("navigationHistory", context.navigationHistory);
  }
}

export function clearSharedContext() {
  sharedContext.set({});
}

export function clearAllStores() {
  clearSelectedId();
  clearSharedContext();

  if (typeof sessionStorage !== "undefined") {
    sessionStorage.removeItem("utbetalingsportalen:selectedId");
    sessionStorage.removeItem("utbetalingsportalen:sharedContext");
  }
}
