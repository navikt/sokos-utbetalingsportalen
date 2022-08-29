import React from "react";
import FeilMelding from "../feilmelding/Feilmelding";
import styles from "./Layout.module.css";

const Layout = ({ children, isError }) => {

  return (
    <div className={styles["layout"]}>
      <main className={styles["main"]}>
        {isError ? <FeilMelding /> : null}
        {children}
      </main>
    </div>
  );
};

export default Layout;
