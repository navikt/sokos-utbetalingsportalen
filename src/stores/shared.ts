import { persistentAtom, setPersistentEngine } from "@nanostores/persistent";

if (typeof window !== "undefined") {
  setPersistentEngine(sessionStorage, {
    addEventListener() {},
    removeEventListener() {},
    perKey: false,
  });
}

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
