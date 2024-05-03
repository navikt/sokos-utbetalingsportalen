import styles from "./Utbetalingsportalen.module.css";
import TopBar from "../topbar/TopBar";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";

const Utbetalingsportalen = () => (
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

export default Utbetalingsportalen;
