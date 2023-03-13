import { State } from "./store.js";
import React, { ComponentType } from "react";

type WithStoreProps = {
  store: State;
};

const withStore =
  <P extends object>(Component: ComponentType<P>): React.FC<P & WithStoreProps> =>
  // eslint-disable-next-line react/display-name
  ({ store, ...props }: WithStoreProps) =>
    <Component {...(props as P)} store={store} />;

export default withStore;
