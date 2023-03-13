import { create } from "zustand";

export const selectIsError = (state: State) => state.isError;
export const selectSetIsError = (state: State) => state.setIsError;
export const selectIsLoggedIn = (state: State) => state.isLoggedIn;
export const selectSetIsLoggedIn = (state: State) => state.setIsLoggedIn;

export type State = {
  isError: boolean;
  isLoggedIn: boolean;
  setIsError: (b: boolean) => void;
  setIsLoggedIn: (b: boolean) => void;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore Fordi typen til "set" blir et kjempeuttrykk
const actions = (set) => ({
  setIsError: (isError: boolean) => set((state: State): State => ({ ...state, isError })),
  setIsLoggedIn: (isLoggedIn: boolean) => set((state: State): State => ({ ...state, isLoggedIn })),
});

const useStore = create<State>((set) => ({
  isError: false,
  isLoggedIn: false,
  ...actions(set),
}));

export default useStore;
