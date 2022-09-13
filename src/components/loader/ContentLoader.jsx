import React from "react";
import { Loader } from "@navikt/ds-react";
import ContentLoaderCSS from "./ContentLoader.module.css";

const ContentLoader = () => {
  return (
    <div className={ContentLoaderCSS.contentloader}>
      <Loader transparent title="Laster inn..." size="2xlarge" />
    </div>
  );
};

export default ContentLoader;
