import { create } from "zustand";
import { UserInfo, initialUserInfo } from "../models/UserInfo";

export const selectIsError = (state: State) => state.isError;
export const selectSetIsError = (state: State) => state.setIsError;

export const selectUserInfo = (state: State) => state.userInfo;
export const selectSetUserInfo = (state: State) => state.setUserInfo;

export const selectGjelderID = (state: State) => state.gjelderid;
export const selectSetGjelderID = (state: State) => state.setGjelderID;

export type State = {
  isError: boolean;
  setIsError: (error: boolean) => void;

  userInfo: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void;

  gjelderid: string;
  setGjelderID: (gjelderId: string) => void;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore Fordi typen til "set" blir et kjempeuttrykk
const actions = (set) => ({
  setIsError: (isError: boolean) => set((state: State): State => ({ ...state, isError })),
  setUserInfo: (userInfo: UserInfo) => set((state: State): State => ({ ...state, userInfo })),
  setGjelderID: (gjelderid: string) => set((state: State): State => ({ ...state, gjelderid })),
});

const useStore = create<State>((set) => ({
  isError: false,
  userInfo: initialUserInfo,
  gjelderid: "",
  ...actions(set),
}));

export default useStore;
