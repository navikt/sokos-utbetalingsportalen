/* import { persistentAtom } from "@nanostores/persistent";

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
 */
