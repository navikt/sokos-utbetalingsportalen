import { ReactNode, useEffect, useState } from "react";
import { getEnvironment } from "../../utils/environment";
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/TopBar";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [environment, setEnvironment] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const environment = getEnvironment();
    setEnvironment(environment);
  }, []);

  const handleSideBarToggle = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <>
      <TopBar />
      <div className={styles["layout-body"]}>
        <SideBar onToggle={handleSideBarToggle} />
        <div
          className={`${styles["layout-content"]} ${!isSidebarOpen ? styles["content-expanded"] : ""}`}
        >
          {environment === "development" && (
            <div className={styles["layout-banner"]}>
              <span>TEST</span>
            </div>
          )}
          <div className={styles["layout-mikrofrontender"]}>{children}</div>
        </div>
      </div>
    </>
  );
}
