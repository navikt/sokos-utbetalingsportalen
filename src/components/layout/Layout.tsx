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

  useEffect(() => {
    const environment = getEnvironment();
    setEnvironment(environment);
  }, []);

  return (
    <>
      <TopBar />
      <div className={styles["layout-body"]}>
        <SideBar />
        <div className={styles["layout-outlet"]}>
          {environment === "development" && (
            <div className={styles["layout-banner"]}>
              <span>TEST</span>
            </div>
          )}
          <div className={styles["layout-content"]}>{children}</div>
        </div>
      </div>
    </>
  );
}
