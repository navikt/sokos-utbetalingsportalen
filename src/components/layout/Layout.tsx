import { ReactNode, useEffect, useState } from "react";
import { getEnvironment } from "../../utils/environment";
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/TopBar";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [environment, setEnvironment] = useState<string>("");
  const [showSideBar, setShowSideBar] = useState(true);

  useEffect(() => {
    const environment = getEnvironment();
    setEnvironment(environment);
  }, []);

  return (
    <>
      <TopBar />
      <div className={styles["layout-body"]}>
        {environment === "development" && (
          <div className={styles["layout-test-banner"]}>
            <svg
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              height="110"
              width="110"
              className={styles["test-ikon"]}
            >
              <polygon points="0,0 110,0 110,110"></polygon>
              <text x="40" y="10" transform="rotate(45 20,40)">
                TEST
              </text>
            </svg>
          </div>
        )}
        <SideBar onToggle={setShowSideBar} showSideBar={showSideBar} />
        <div
          className={`${styles["layout-content"]} ${!showSideBar ? styles["content-expanded"] : ""}`}
        >
          <div className={styles["layout-mikrofrontender"]}>{children}</div>
        </div>
      </div>
    </>
  );
}
