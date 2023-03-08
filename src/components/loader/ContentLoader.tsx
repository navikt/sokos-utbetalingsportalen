import { Loader } from "@navikt/ds-react";
import ContentLoaderCSS from "./ContentLoader.module.css";

const ContentLoader = (): JSX.Element => {
  return (
    <div className={ContentLoaderCSS.contentloader}>
      <Loader transparent title="Laster inn..." size="2xlarge" />
    </div>
  );
};

export default ContentLoader;
