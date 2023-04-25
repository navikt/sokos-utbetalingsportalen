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
            <main className={LayoutCSS.main}>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
