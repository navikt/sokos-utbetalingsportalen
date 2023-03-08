import { type PropsWithChildren } from "react";
import FeilMelding from "../feilmelding/Feilmelding";
import LayoutCSS from "./Layout.module.css";

type LayoutProps = {
  isError: boolean;
};

const Layout = ({ children, isError }: LayoutProps & PropsWithChildren): JSX.Element => {
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
