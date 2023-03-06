import { create } from "zustand";

export const selectIsError = (state) => state.isError;
export const selectSetIsError = (state) => state.setIsError;

const actions = (set) => ({
  setIsError: () =>
    set({
      isError: true,
    }),
});

const useStore = create((set) => ({
  isError: false,
  ...actions(set),
}));

export default useStore;
