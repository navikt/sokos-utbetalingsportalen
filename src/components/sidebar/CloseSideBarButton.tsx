import { XMarkIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";

type CloseSideBarButtonProps = {
  setShowSideBar: (b: boolean) => void;
};

const CloseSideBarButton = ({ setShowSideBar }: CloseSideBarButtonProps) => (
  <div className="flex flex-row bg-neutral-800 justify-end">
    <Button
      className="bg-neutral-800 w-28"
      onClick={() => setShowSideBar(false)}
      icon={<XMarkIcon />}
      iconPosition="right"
      variant="primary-neutral"
    >
      Lukk
    </Button>
  </div>
);

export default CloseSideBarButton;
