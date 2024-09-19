import { Loader } from "@navikt/ds-react";
import styles from "./ContentLoader.module.css";

export default function ContentLoader() {
  return (
    <div className={styles.contentloader}>
      <Loader variant="interaction" title="Laster inn side.." size="2xlarge" />
    </div>
  );
}
