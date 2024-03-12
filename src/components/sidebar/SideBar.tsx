import { MenuHamburgerIcon, HouseIcon, XMarkIcon } from "@navikt/aksel-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AzureAdGroupName, AzureAdGroupNameId, AzureAdGroupNames } from "../../auth/azureAdGroups";
import { ROUTE_PATH } from "../../models/routePath";
import styles from "./SideBar.module.css";
import { getAzureAdGroups } from "../../auth/authentication";

const SideBar = () => {
  const [groups, setGroups] = useState<Array<string>>([]);
  const [showSideBar, setShowSideBar] = useState(true);

  useEffect(() => {
    getAzureAdGroups()
      .then((adGroups) => setGroups(adGroups))
      .catch((error) => {
        throw new Error("Failed to load Azure AD groups:", error);
      });
  }, []);
  const hasAccess = (group: AzureAdGroupNames) => groups.some((id) => id === AzureAdGroupNameId[group]);

  return (
    <>
      <div
        className={`${styles.sidebar} bg-neutral-800 h-screen max-w-screen-sm min-w-72 overflow-hidden top-12 left-0 flex-col ${
          showSideBar ? "translate-x-0 min-w-fit w-100" : "-translate-x-full w-0"
        }`}
      >
        <div className="p-3 flex justify-end text-white">
          <button className="cursor-pointer flex flex-row items-center" onClick={() => setShowSideBar(!showSideBar)}>
            Lukk <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <ul className="px-6 top-1.5 flex flex-col space-y-2 text-white">
          <Link className={`flex flex-row items-center ${styles.link}`} to={ROUTE_PATH.SOKOS_UP_HOME}>
            {" "}
            <HouseIcon className="h-6 w-6" />
            Hjem
          </Link>
          <div className="border-b border-gray-600 my-2" />
          {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ) && (
            <>
              <Link className={styles.link} to={ROUTE_PATH.SOKOS_MIKROFRONTEND_TEMPLATE}>
                Mikrofrontend
              </Link>
              <div className="border-b border-gray-600 my-2" />
            </>
          )}
          {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_KRP_READ) && (
            <>
              <Link className={styles.link} to={ROUTE_PATH.SOKOS_UP_KRP}>
                Kontoregister person kontosøk
              </Link>
              <div className="border-b border-gray-600 my-2" />
            </>
          )}
          {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ORS_READ) && (
            <>
              <Link className={styles.link} to={ROUTE_PATH.SOKOS_UP_ORS}>
                Oppslag Reskontro Stønad
              </Link>
              <div className="border-b border-gray-600 my-2" />
            </>
          )}
          {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ) && (
            <>
              <Link className={styles.link} to={ROUTE_PATH.SOKOS_UP_SKATTEKORT}>
                Skattekort
              </Link>
              <div className="border-b border-gray-600 my-2" />
            </>
          )}
          {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ) && (
            <>
              <Link className={styles.link} to={ROUTE_PATH.SOKOS_UP_OPPDRAGSINFO}>
                Oppdragsinfo
              </Link>
              <div className="border-b border-gray-600 my-2" />
            </>
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
