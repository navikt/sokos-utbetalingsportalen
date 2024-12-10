import { HouseIcon, MenuHamburgerIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";
import useApps from "../../hooks/useApps";
import styles from "./SideBar.module.css";
import SideBarLink from "./SideBarLink";

type SideBarProps = {
  onToggle: (isOpen: boolean) => void;
  showSideBar?: boolean;
};

const iconStyle = "w-6 h-6 pb-[2px]";

export default function SideBar({ onToggle, showSideBar }: SideBarProps) {
  const { authorizedApps } = useApps();

  const handleToggle = () => {
    onToggle(!showSideBar);
  };

  if (!showSideBar) {
    return (
      <div className={`${styles.closed} ${styles.sidebar}`} role="navigation">
        <Button
          className="bg-neutral-800"
          onClick={handleToggle}
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

  return (
    <div className={styles["sidebar"]} role="navigation">
      <div className={styles["closebutton"]}>
        <Button
          data-umami-event={"lukk sidebar"}
          className="bg-neutral-800 w-28"
          onClick={handleToggle}
          icon={<XMarkIcon title="Kryss" />}
          iconPosition="right"
          variant="primary-neutral"
        >
          Lukk
        </Button>
      </div>

      <ul className={styles["sidebar-links"]}>
        <SideBarLink to={"/"}>
          <HouseIcon className={iconStyle} title="Hus" />
          Hjem
        </SideBarLink>
        {getMicrofrontendLinks()}
      </ul>
    </div>
  );
}
