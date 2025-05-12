import { Loader } from "@navikt/ds-react";
import styles from "../sidebar/SideBar.module.css";

export default function SideBarSkeleton() {
  return (
    <div className={`${styles.closed} ${styles.sidebar}`} role="navigation">
      <div style={{ padding: "0.7rem" }}>
        <Loader variant="inverted" />
      </div>
    </div>
  );
}
