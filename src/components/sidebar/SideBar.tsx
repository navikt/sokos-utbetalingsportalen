import { useState } from "react";
import { HouseIcon } from "@navikt/aksel-icons";
import useApper from "../../hooks/useApper";
import { ROUTE_PATH } from "../../models/routePath";
import CloseSideBarButton from "./CloseSideBarButton";
import ClosedSideBar from "./ClosedSideBar";
import styles from "./SideBar.module.css";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const { apperMedTilgang } = useApper();
  if (!showSideBar) {
    return (
      <div className={`${styles.closed} ${styles.sidebar}`}>
        <ClosedSideBar setShowSideBar={setShowSideBar} />
      </div>
    );
  }

  const lenker = apperMedTilgang.map((side) => (
    <SideBarLink to={side.route} key={side.app}>
      {side.title}
    </SideBarLink>
  ));

  const ikonStil = "w-6 h-6 pb-[2px]";

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
