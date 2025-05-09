import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { microfrontendConfigArray as allApps } from "src/microfrontend";
import { hasAccessToAdGroup } from "src/utils/common";
import { HouseIcon, MenuHamburgerIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Button, Link } from "@navikt/ds-react";
import styles from "./SideBar.module.css";

type SideBarProps = {
  adGroups: string[];
};

export default function SideBar({ adGroups }: SideBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const event = new CustomEvent("sidebarStateChange", {
      detail: { isOpen },
    });
    document.dispatchEvent(event);
  }, [isOpen]);

  const authorizedApps = allApps.filter(
    (app) =>
      hasAccessToAdGroup(adGroups, app.adGroupDevelopment) ||
      hasAccessToAdGroup(adGroups, app.adGroupProduction),
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const renderSideBarLink = ({
    children,
    route,
  }: PropsWithChildren & { route: string }) => {
    const isActive =
      typeof window !== "undefined" &&
      (window.location.pathname === route ||
        (route !== "/" && window.location.pathname.startsWith(route + "/")));

    return (
      <Link
        className={`${styles.sidebarLink} ${isActive ? styles.active : ""}`}
        href={route}
      >
        <div className={styles.sidebarLinkChild}>{children}</div>
      </Link>
    );
  };

  if (!isOpen) {
    return (
      <div className={`${styles.closed} ${styles.sidebar}`} role="navigation">
        <Button
          className={styles.buttonColor}
          onClick={handleToggle}
          variant="primary-neutral"
          icon={<MenuHamburgerIcon title="Hamburgermeny ikon" />}
        />
      </div>
    );
  }

  function getMicrofrontendLinks() {
    return authorizedApps
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((page) => (
        <li key={page.app} className={styles.sidebarLinks}>
          {renderSideBarLink({
            route: page.route,
            children: page.title,
          })}
        </li>
      ));
  }

  return (
    <div className={styles.sidebar} role="navigation">
      <div className={styles.closeButton}>
        <Button
          className={styles.buttonColor}
          onClick={handleToggle}
          icon={<XMarkIcon title="Kryss ikon" />}
          iconPosition="right"
          variant="primary-neutral"
        >
          Lukk
        </Button>
      </div>

      <ul className={styles.sidebarList}>
        <li className={styles.sidebarLinks}>
          {renderSideBarLink({
            route: "/",
            children: (
              <>
                <HouseIcon className={styles.iconStyle} title="Hus ikon" />
                Hjem
              </>
            ),
          })}
        </li>
        {getMicrofrontendLinks()}
      </ul>
    </div>
  );
}
