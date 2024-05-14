import { useState } from "react";
import { HouseIcon } from "@navikt/aksel-icons";
import useApps from "../../hooks/useApps";
import { ROUTE_PATH } from "../../models/routePath";
import CloseSideBarButton from "./CloseSideBarButton";
import ClosedSideBar from "./ClosedSideBar";
import styles from "./SideBar.module.css";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const { authorizedApps } = useApps();
  if (!showSideBar) {
    return (
      <div className={`${styles.closed} ${styles.sidebar}`}>
        <ClosedSideBar setShowSideBar={setShowSideBar} />
      </div>
    );
  }

  const links = authorizedApps.map((page) => (
    <SideBarLink to={page.route} key={page.app}>
      {page.title}
    </SideBarLink>
  ));

  const iconStyle = "w-6 h-6 pb-[2px]";

  return (
    <>
      <div className={styles.sidebar}>
        <CloseSideBarButton setShowSideBar={setShowSideBar} />

        <ul className={styles.sidebar__links}>
          <SideBarLink to={ROUTE_PATH.SOKOS_UP_HOME}>
            <HouseIcon className={iconStyle} />
            Hjem
          </SideBarLink>
          {links}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
