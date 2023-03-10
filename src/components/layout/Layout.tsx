import { type PropsWithChildren } from "react";
import LayoutCSS from "./Layout.module.css";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={LayoutCSS.layout}>
      <main className={LayoutCSS.main}>{children}</main>
    </div>
  );
};

export default Layout;
