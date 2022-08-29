import create from "zustand";
import { getLanguageFromCookie } from "../language/utils";

export const selectIsError = (state) => state.isError;
export const selectSetIsError = (state) => state.setIsError;
export const selectLanguage = (state) => state.language;
export const selectSetLanguage = (state) => state.setLanguage;

const actions = (set) => ({
  setLanguage: (locale) =>
    set({
      language: locale,
    }),
  setIsError: () =>
    set({
      isError: true,
    }),
});

const useStore = create((set) => ({
  language: getLanguageFromCookie(),
  isError: false,
  ...actions(set),
}));

export default useStore;
