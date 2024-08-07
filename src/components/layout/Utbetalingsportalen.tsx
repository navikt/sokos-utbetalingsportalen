import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/TopBar";
import styles from "./Utbetalingsportalen.module.css";

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
