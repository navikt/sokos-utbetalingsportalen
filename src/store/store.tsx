import { create } from "zustand";

export const selectIsError = (state: IsErrorState) => state.isError;
export const selectSetIsError = (state: IsErrorState) => state.setIsError;

export type IsErrorState = {
  isError: boolean;
  setIsError: (b: boolean) => void;
};

const useIsErrorStore = create<IsErrorState>((set) => ({
  isError: false,
  setIsError: (isError) =>
    set((state) => ({
      ...state,
      isError,
    })),
}));

export default useIsErrorStore;
