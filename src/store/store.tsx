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

const useStore = create<State>((set) => ({
  isError: false,
  setIsError: (isError) =>
    set((state) => ({
      ...state,
      isError,
    })),
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => {
    set((state) => ({
      ...state,
      isLoggedIn,
    }));
  },
}));

export default useStore;
