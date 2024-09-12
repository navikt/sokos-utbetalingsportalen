import { Loader } from "@navikt/ds-react";
import styles from "./ContentLoader.module.css";

const ContentLoader = () => (
  <div className={styles.contentloader}>
    <Loader variant="interaction" title="Laster inn side.." size="2xlarge" />
  </div>
);

export default ContentLoader;
