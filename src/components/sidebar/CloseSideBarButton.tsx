import { XMarkIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";
import styles from "./CloseSideBarButton.module.css";

type CloseSideBarButtonProps = {
  setShowSideBar: (b: boolean) => void;
};

const CloseSideBarButton = ({ setShowSideBar }: CloseSideBarButtonProps) => (
  <div className={styles.closebutton}>
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
