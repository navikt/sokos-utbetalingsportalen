import styles from "./Layout.module.css";
import TopBar from "../topbar/TopBar";
import SideBar from "../sidebar/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <TopBar />
      <div className="flex w-screen">
        <SideBar />
        <div className={"w-screen"}>
          <div className={styles.layout}>
            <div className={styles.main}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
