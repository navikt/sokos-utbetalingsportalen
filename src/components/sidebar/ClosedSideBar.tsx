import { MenuHamburgerIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";

const ClosedSideBar = ({ setShowSideBar }: { setShowSideBar: (b: boolean) => void }) => (
  <Button
    className="bg-neutral-800"
    onClick={() => setShowSideBar(true)}
    variant="primary-neutral"
    icon={<MenuHamburgerIcon />}
  ></Button>
);

export default ClosedSideBar;
