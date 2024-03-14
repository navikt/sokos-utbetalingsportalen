import { MenuHamburgerIcon, HouseIcon, XMarkIcon } from "@navikt/aksel-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AzureAdGroupName, AzureAdGroupNameId, AzureAdGroupNames } from "../../auth/azureAdGroups";
import { ROUTE_PATH } from "../../models/routePath";
import styles from "./SideBar.module.css";
import { getAzureAdGroups } from "../../auth/authentication";
import { Button } from "@navikt/ds-react";

const SideBar = () => {
  const [groups, setGroups] = useState<Array<string>>([]);
  const [showSideBar, setShowSideBar] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    if (!showSideBar) {
      const timer = setTimeout(() => {
        setButtonVisible(true);
      }, 500); // timeout for å få en bedre overgang

      return () => clearTimeout(timer);
    } else {
      setButtonVisible(false);
    }
  }, [showSideBar]);

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
        className={`transition-all duration-500 ease-in-out bg-neutral-800 h-screen overflow-hidden top-12 left-0 flex-col ${
          showSideBar ? "translate-x-0 w-64 min-w-64" : "-translate-x-full w-0 min-w-0"
        }`}
      >
        <div className="p-3 flex justify-end text-white">
          <Button
            className="cursor-pointer flex flex-row items-center bg-neutral-800"
            onClick={() => setShowSideBar(!showSideBar)}
            icon={<XMarkIcon />}
            iconPosition="right"
            variant="primary-neutral"
          >
            Lukk
          </Button>
        </div>
        <ul className="px-6 top-1.5 flex flex-col space-y-2 text-white">
          <Link className={`flex flex-row items-center ${styles.link}`} to={ROUTE_PATH.SOKOS_UP_HOME}>
            <HouseIcon className="h-6 w-6 mr-2 mb-1" />
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
      {buttonVisible && (
        <Button
          className="bg-neutral-800 rounded-none w-20 left-0 fixed h-screen top-0 z-10 flex flex-col justify-start items-center"
          onClick={() => setShowSideBar(!showSideBar)}
          variant="primary-neutral"
          icon={<MenuHamburgerIcon className="w-8 h-8 mt-12" />}
        ></Button>
      )}
    </>
  );
};

export default SideBar;
