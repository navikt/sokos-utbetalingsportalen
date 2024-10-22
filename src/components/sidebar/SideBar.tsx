import { useState } from "react";
import { HouseIcon, MenuHamburgerIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";
import useApps from "../../hooks/useApps";
import { ROUTES } from "../../routes/routes";
import styles from "./SideBar.module.css";
import SideBarLink from "./SideBarLink";

export default function SideBar() {
  const [showSideBar, setShowSideBar] = useState(true);
  const { authorizedApps } = useApps();
  if (!showSideBar) {
    return (
      <div className={`${styles.closed} ${styles.sidebar}`} role="navigation">
        <Button
          className="bg-neutral-800"
          onClick={() => setShowSideBar(true)}
          variant="primary-neutral"
          icon={<MenuHamburgerIcon title="Hamburgermeny ikon" />}
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
    <div className={styles["sidebar"]} role="navigation">
      <div className={styles["closebutton"]}>
        <Button
          className="bg-neutral-800 w-28"
          onClick={() => setShowSideBar(false)}
          icon={<XMarkIcon title="X mark ikon" />}
          iconPosition="right"
          variant="primary-neutral"
        >
          Lukk
        </Button>
      </div>

      <ul className={styles["sidebar-links"]}>
        <SideBarLink to={ROUTES.SOKOS_UP_HOME}>
          <HouseIcon className={iconStyle} title="Hus ikon" />
          Hjem
        </SideBarLink>
        {getMicrofrontendLinks()}
      </ul>
    </div>
  );
}
