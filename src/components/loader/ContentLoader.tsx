import { Heading, Loader } from "@navikt/ds-react";
import styles from "./ContentLoader.module.css";

export default function ContentLoader() {
  return (
    <div className={styles["contentloader"]}>
      <Heading size="xsmall" spacing>
        Laster inn side..
      </Heading>
      <Loader variant="interaction" title="Laster inn side.." size="2xlarge" />
    </div>
  );
}
