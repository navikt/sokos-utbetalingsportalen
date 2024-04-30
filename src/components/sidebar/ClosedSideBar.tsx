import { MenuHamburgerIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";

const ClosedSideBar = ({ setShowSideBar }: { setShowSideBar: (b: boolean) => void }) => (
  <div className="bg-neutral-800 h-screen transition-all ease-in-out duration-500">
    <Button
      className="bg-neutral-800"
      onClick={() => setShowSideBar(true)}
      variant="primary-neutral"
      icon={<MenuHamburgerIcon />}
    ></Button>
  </div>
);

export default ClosedSideBar;
