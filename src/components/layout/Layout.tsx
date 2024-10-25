import { ReactNode } from "react";
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/TopBar";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode; // Define the type for children
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <TopBar />
      <div className={styles["utbetalingsportalen-body"]}>
        <SideBar />

        <div className={styles["utbetalingsportalen-outlet"]}>{children} </div>
      </div>
    </>
  );
}
