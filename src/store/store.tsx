import { create } from "zustand";
import { isFunction } from "swr/_internal";

export const selectIsError = (state: State) => state.isError;
export const selectSetIsError = (state: State) => state.setIsError;
export const selectIsLoggedIn = (state: State) => state.isLoggedIn;
export const selectSetIsLoggedIn = (state: State) => state.setIsLoggedIn;
export const selectGjelderID = (state: State) => state.gjelderid;
export const selectSetGjelderID = (state: State) => state.setGjelderID;

export const selectDebug = (state: State) =>
  [state]
    .map(Object.keys)
    .map((k) => k.filter((key) => !isFunction(state[key])).map((key) => [key, state[key]]))
    .map(Object.fromEntries)
    .map((ar) => JSON.stringify(ar));

export type State = {
  isError: boolean;
  isLoggedIn: boolean;
  gjelderid: string;
  setIsError: (b: boolean) => void;
  setIsLoggedIn: (b: boolean) => void;
  setGjelderID: (s: string) => void;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore Fordi typen til "set" blir et kjempeuttrykk
const actions = (set) => ({
  setIsError: (isError: boolean) => set((state: State): State => ({ ...state, isError })),
  setIsLoggedIn: (isLoggedIn: boolean) => set((state: State): State => ({ ...state, isLoggedIn })),
  setGjelderID: (gjelderid: string) => set((state: State): State => ({ ...state, gjelderid })),
});

const useStore = create<State>((set) => ({
  isError: false,
  isLoggedIn: false,
  gjelderid: "",
  ...actions(set),
}));

export default useStore;
