import React, { ReactNode, useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { Switch } from "@navikt/ds-react";
import {
  getApplicationEnvrionment,
  getEnvironment,
} from "../../utils/environment";
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/TopBar";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

type EnvironmentState = {
  environment: string;
  applicationEnvironment: string;
};

const EnvironmentBanner = ({
  environment,
  applicationEnvironment,
}: EnvironmentState) =>
  environment === "development" && (
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
        <text x="25" y="10" transform="rotate(45 20,40)">
          TEST {applicationEnvironment}
        </text>
      </svg>
    </div>
  );

export default function Layout({ children }: LayoutProps) {
  const [state, setState] = useState<EnvironmentState>({
    environment: "",
    applicationEnvironment: "",
  });
  const [showSideBar, setShowSideBar] = useState(true);
  const [showSnowfall, setShowSnowfall] = useState(true);

  useEffect(() => {
    const applicationEnvironment = getApplicationEnvrionment();
    const environment = getEnvironment();
    setState({ environment, applicationEnvironment });
  }, []);

  useEffect(() => {
    if (showSnowfall) {
      document.body.classList.add("snowfall-background");
    } else {
      document.body.classList.remove("snowfall-background");
    }
  }, [showSnowfall]);

  return (
    <>
      <TopBar />
      <div className={styles["layout-body"]}>
        <EnvironmentBanner {...state} />
        <SideBar onToggle={setShowSideBar} showSideBar={showSideBar} />
        <div
          className={`${styles["layout-content"]} ${!showSideBar ? styles["content-expanded"] : ""}`}
        >
          <div className="flex items-center pl-5 pt-1">
            <Switch
              checked={showSnowfall}
              onChange={(e) => setShowSnowfall(e.target.checked)}
            >
              Julestemning
            </Switch>
            {showSnowfall && (
              <Snowfall
                color={"white"}
                style={{
                  position: "fixed",
                  width: "100vw",
                  height: "100vh",
                }}
              />
            )}
          </div>
          <div className={styles["layout-mikrofrontender"]}>{children}</div>
        </div>
      </div>
    </>
  );
}
