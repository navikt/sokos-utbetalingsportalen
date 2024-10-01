import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/TopBar";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <TopBar />
      <div className={styles.utbetalingsportalen__body}>
        <SideBar />

        <div className={styles.utbetalingsportalen__outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
