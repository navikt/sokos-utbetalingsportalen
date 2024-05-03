import { HouseIcon } from "@navikt/aksel-icons";
import { useState } from "react";
import { Apper } from "../../models/apper";
import { ROUTE_PATH } from "../../models/routePath";
import RestService from "../../services/rest-service";
import CloseSideBarButton from "./CloseSideBarButton";
import ClosedSideBar from "./ClosedSideBar";
import SideBarLink from "./SideBarLink";
import { ikonStil } from "../../utils/ikonStil";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const hasAccess = RestService.useFetchHasAccess();

  if (!showSideBar) {
    return (
      <div className={`${styles.closed} ${styles.sidebar}`}>
        <ClosedSideBar setShowSideBar={setShowSideBar} />
      </div>
    );
  }

  const lenker = Apper.filter((side) => hasAccess(side.group)).map((side) => (
    <SideBarLink to={side.route} key={side.app}>
      {side.title}
    </SideBarLink>
  ));

  return (
    <>
      <div className={styles.sidebar}>
        <CloseSideBarButton setShowSideBar={setShowSideBar} />

        <ul className={styles.sidebar__links}>
          <SideBarLink to={ROUTE_PATH.SOKOS_UP_HOME}>
            <HouseIcon className={ikonStil} />
            Hjem
          </SideBarLink>

          {lenker}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
