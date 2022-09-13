import React from "react";
import FeilMelding from "../feilmelding/Feilmelding";
import LayoutCSS from "./Layout.module.css";

const Layout = ({ children, isError }) => {
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
