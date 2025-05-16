import { HouseIcon, MenuHamburgerIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Button, Link } from "@navikt/ds-react";
import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { getAuthorizedApps } from "src/utils/accessControl";
import styles from "./SideBar.module.css";
import { normalizeRoute } from "src/utils/normalizeRoute";

type SideBarProps = {
  adGroups: string[];
};

export default function SideBar({ adGroups }: SideBarProps) {
  const authorizedApps = getAuthorizedApps(adGroups);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const event = new CustomEvent("sidebarStateChange", {
      detail: { isOpen },
    });
    document.dispatchEvent(event);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const renderSideBarLink = ({
    children,
    route,
  }: PropsWithChildren & { route: string }) => {
    const normalizedRoute = normalizeRoute(route);

    const isActive =
      typeof window !== "undefined" &&
      (window.location.pathname === normalizedRoute ||
        (normalizedRoute !== "/" &&
          window.location.pathname.startsWith(normalizedRoute + "/")));

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
