import { HouseIcon, MenuHamburgerIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Button, Link } from "@navikt/ds-react";
import type { PropsWithChildren } from "react";
import { useEffect, useState, useRef } from "react";
import { getAuthorizedApps } from "@utils/accessControl";
import styles from "./SideBar.module.css";

type SideBarProps = {
  adGroups: string[];
};

export default function SideBar({ adGroups }: SideBarProps) {
  const authorizedApps = getAuthorizedApps(adGroups);
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const event = new CustomEvent("sidebarStateChange", {
      detail: { isOpen },
    });
    document.dispatchEvent(event);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setShowButton(false);
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (isOpen) {
      setShowButton(false);
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setShowButton(true);
    }
  };

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setShowButton(true);
    }
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
        className={`${styles["sidebar__link"]} ${isActive ? styles["sidebar__link--active"] : ""}`}
        href={route}
      >
        <div className={styles["sidebar__linkChild"]}>{children}</div>
      </Link>
    );
  };

  function getMicrofrontendLinks() {
    return authorizedApps
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((page) => (
        <li key={page.app} className={styles["sidebar__links"]}>
          {renderSideBarLink({
            route: page.route,
            children: page.title,
          })}
        </li>
      ));
  }

  if (!isOpen) {
    return (
      <div
        className={`${styles["sidebar--closed"]} ${styles["sidebar"]}`}
        role="navigation"
        onTransitionEnd={handleTransitionEnd}
      >
        {showButton && (
          <Button
            className={styles["sidebar__buttonColor"]}
            onClick={handleToggle}
            variant="primary-neutral"
            icon={<MenuHamburgerIcon title="Hamburgermeny ikon" />}
          />
        )}
      </div>
    );
  }

  return (
    <div className={styles["sidebar"]} role="navigation" ref={sidebarRef}>
      <div className={styles["sidebar__closeButton"]}>
        <Button
          className={styles["sidebar__buttonColor"]}
          onClick={handleToggle}
          icon={<XMarkIcon title="Kryss ikon" />}
          iconPosition="right"
          variant="primary-neutral"
        >
          Lukk
        </Button>
      </div>

      <ul className={styles["sidebar__list"]}>
        <li className={styles["sidebar__links"]}>
          {renderSideBarLink({
            route: "/",
            children: (
              <>
                <HouseIcon
                  className={styles["sidebar__icon"]}
                  title="Hus ikon"
                />
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
