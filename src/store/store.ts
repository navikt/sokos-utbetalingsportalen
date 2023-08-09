import { create } from "zustand";

export const selectGjelderID = (state: State) => state.gjelderid;
export const selectSetGjelderID = (state: State) => state.setGjelderID;

export type State = {
  gjelderid: string;
  setGjelderID: (gjelderId: string) => void;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore Fordi typen til "set" blir et kjempeuttrykk
const actions = (set) => ({
  setGjelderID: (gjelderid: string) => set((state: State): State => ({ ...state, gjelderid })),
});

const useStore = create<State>((set) => ({
  gjelderid: "",
  ...actions(set),
}));

export default useStore;
