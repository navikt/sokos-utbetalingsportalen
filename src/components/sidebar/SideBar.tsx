import { HouseIcon, MenuHamburgerIcon, XMarkIcon } from "@navikt/aksel-icons";
import { useState } from "react";
import Link from "./SideBarLink";
import { AzureAdGroupName } from "../../auth/azureAdGroups";
import { ROUTE_PATH } from "../../models/routePath";
import styles from "./SideBar.module.css";
import { Button } from "@navikt/ds-react";
import RestService from "../../services/rest-service";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const hasAccess = RestService.useFetchHasAccess();

  return (
    <>
      {showSideBar ? (
        <div
          className={`${styles.sidebar} ${styles.open} bg-neutral-800 min-h-screen overflow-hidden top-12 left-0 flex-col`}
        >
          <div className="flex justify-end text-white">
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
          <ul className="top-1.5 flex flex-col text-white">
            <Link className={`flex flex-row items-center ${styles.sidebar__link}`} to={ROUTE_PATH.SOKOS_UP_HOME}>
              <HouseIcon className="h-6 w-6 mr-2 mb-1 min-w-6" />
              Hjem
            </Link>
            {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ) && (
              <>
                <Link className={styles.sidebar__link} to={ROUTE_PATH.SOKOS_MIKROFRONTEND_TEMPLATE}>
                  Mikrofrontend
                </Link>
              </>
            )}
            {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_KRP_READ) && (
              <>
                <Link className={styles.sidebar__link} to={ROUTE_PATH.SOKOS_UP_KRP}>
                  Kontoregister person kontosøk
                </Link>
              </>
            )}
            {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ORS_READ) && (
              <>
                <Link className={styles.sidebar__link} to={ROUTE_PATH.SOKOS_UP_ORS}>
                  Oppslag Reskontro Stønad
                </Link>
              </>
            )}
            {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ) && (
              <>
                <Link className={styles.sidebar__link} to={ROUTE_PATH.SOKOS_UP_SKATTEKORT}>
                  Skattekort
                </Link>
              </>
            )}
            {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ) && (
              <>
                <Link className={styles.sidebar__link} to={ROUTE_PATH.SOKOS_UP_OPPDRAGSINFO}>
                  Oppdragsinfo
                </Link>
              </>
            )}
          </ul>
        </div>
      ) : (
        <div
          className={`${styles.sidebar} bg-neutral-800 left-0 min-h-screen flex flex-col justify-start items-center`}
        >
          <Button
            className="cursor-pointer mt-2 bg-neutral-800"
            onClick={() => setShowSideBar(!showSideBar)}
            variant="primary-neutral"
            icon={<MenuHamburgerIcon className="w-8 h-8" />}
          ></Button>
        </div>
      )}
    </>
  );
};

export default SideBar;
