import LayoutCSS from "./Layout.module.css";
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
          <div className={LayoutCSS.layout}>
            <div className={LayoutCSS.main}>
              <div className={LayoutCSS.contentWrapper}>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
