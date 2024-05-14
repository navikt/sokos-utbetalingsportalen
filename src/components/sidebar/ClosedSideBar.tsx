import { MenuHamburgerIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";

type ClosedSideBarProps = {
  setShowSideBar: (b: boolean) => void;
};

const ClosedSideBar = ({ setShowSideBar }: ClosedSideBarProps) => (
  <Button
    className="bg-neutral-800"
    onClick={() => setShowSideBar(true)}
    variant="primary-neutral"
    icon={<MenuHamburgerIcon />}
  ></Button>
);

export default ClosedSideBar;
