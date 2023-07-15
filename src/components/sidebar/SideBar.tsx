import { MenuHamburgerIcon } from "@navikt/aksel-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../authentication/authentication";
import { AzureAdGroupName } from "../../authentication/azureAdGroups";
import { ROUTE_PATH } from "../../models/RoutePath";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const hasAccess = useAuth();
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <>
      <div
        className={`bg-neutral-800 h-screen overflow-hidden top-12 left-0 flex-col ${
          showSideBar ? "min-w-fit w-100" : "w-0"
        }`}
      >
        <div className="p-3 flex justify-end text-white">
          <button className="cursor-pointer" onClick={() => setShowSideBar(!showSideBar)}>
            X
          </button>
        </div>
        <ul className="px-10 top-1.5 flex flex-col text-white">
          {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ) && (
            <Link className={styles.link} to={ROUTE_PATH.SOKOS_MIKROFRONTEND_TEMPLATE}>
              Mikrofrontend
            </Link>
          )}
          {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ) && (
            <Link className={styles.link} to={ROUTE_PATH.UTBETALINGER_FRONTEND_POC}>
              Søk Posteringer
            </Link>
          )}
          {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ) && (
            <Link className={styles.link} to={ROUTE_PATH.SOKOS_OP_SKATTEKORT}>
              Skattekort
            </Link>
          )}
        </ul>
      </div>
      {!showSideBar && (
        <svg
          onClick={() => setShowSideBar(!showSideBar)}
          className="fixed z-30 flex items-center cursor-pointer left-2 top-10"
          fill="#2563EB"
          viewBox="0 0 100 70"
          width="100"
          height="100"
        >
          <MenuHamburgerIcon fontSize="1.5rem" />
        </svg>
      )}
    </>
  );
};

export default SideBar;
