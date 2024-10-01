import { useState } from "react";
import { HouseIcon, MenuHamburgerIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";
import useApps from "../../hooks/useApps";
import { ROUTE_PATH } from "../../models/routePath";
import styles from "./SideBar.module.css";
import SideBarLink from "./SideBarLink";

export default function SideBar() {
  const [showSideBar, setShowSideBar] = useState(true);
  const { authorizedApps } = useApps();
  if (!showSideBar) {
    return (
      <div className={`${styles.closed} ${styles.sidebar}`}>
        <Button
          className="bg-neutral-800"
          onClick={() => setShowSideBar(true)}
          variant="primary-neutral"
          icon={<MenuHamburgerIcon title="Åpne meny" />}
        />
      </div>
    );
  }

  function getMicrofrontendLinks() {
    return authorizedApps.map((page) => (
      <SideBarLink to={page.route} key={page.app}>
        {page.title}
      </SideBarLink>
    ));
  }

  const iconStyle = "w-6 h-6 pb-[2px]";

  return (
    <div className={styles.sidebar} role="navigation">
      <div className={styles.closebutton}>
        <Button
          className="bg-neutral-800 w-28"
          onClick={() => setShowSideBar(false)}
          icon={<XMarkIcon title="Lukk meny" />}
          iconPosition="right"
          variant="primary-neutral"
        >
          Lukk
        </Button>
      </div>

      <ul className={styles.sidebar__links}>
        <SideBarLink to={ROUTE_PATH.SOKOS_UP_HOME}>
          <HouseIcon className={iconStyle} />
          Hjem
        </SideBarLink>
        {getMicrofrontendLinks()}
      </ul>
    </div>
  );
}
