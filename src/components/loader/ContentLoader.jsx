import React from "react";
import { Loader } from "@navikt/ds-react";
import styles from "./ContentLoader.module.css";

const ContentLoader = () => {
  return (
    <div className={styles["content-loader"]}>
      <Loader transparent title="Laster inn..." size="2xlarge" />
    </div>
  );
};

export default ContentLoader;
