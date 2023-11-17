import { MenuHamburgerIcon } from "@navikt/aksel-icons";
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
          {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ) && (
            <Link className={styles.link} to={ROUTE_PATH.SOKOS_OP_POSTERING_SOK}>
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
