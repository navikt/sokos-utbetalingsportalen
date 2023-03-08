import React, { type PropsWithChildren } from "react";
import FeilMelding from "../feilmelding/Feilmelding";
import LayoutCSS from "./Layout.module.css";
import useIsErrorStore, { selectIsError } from "../../store/store";

const Layout = ({ children }: PropsWithChildren) => {
  const isError = useIsErrorStore(selectIsError);
  return (
    <div className={LayoutCSS.layout}>
      <main className={LayoutCSS.main}>
        {isError ? <FeilMelding /> : null}
        {children}
      </main>
    </div>
  );
};

export default Layout;
