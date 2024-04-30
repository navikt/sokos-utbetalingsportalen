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
        <div className={`${styles.sidebar} ${styles.open}`}>
          <div className={styles.sidebar__openbar}>
            <div className={styles.sidebar__openbar__button}>
              <Button
                onClick={() => setShowSideBar(!showSideBar)}
                icon={<XMarkIcon />}
                iconPosition="right"
                variant="tertiary-neutral"
              >
                Lukk
              </Button>
            </div>
          </div>
          <ul className={styles.sidebar__ul}>
            <Link className={styles.sidebar__ullink} to={ROUTE_PATH.SOKOS_UP_HOME}>
              <HouseIcon className={styles.sidebar__house} />
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
        <div className={`${styles.sidebar} ${styles.closed}`}>
          <div className={styles.sidebar__closedbar__button}>
            <Button
              onClick={() => setShowSideBar(!showSideBar)}
              variant="tertiary-neutral"
              icon={<MenuHamburgerIcon />}
            ></Button>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
