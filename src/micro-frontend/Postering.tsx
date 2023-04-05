import React, { LazyExoticComponent } from "react";
import ContentLoader from "../components/loader/ContentLoader.js";
import { posteringUrl } from "../urls.js";
import { ErrorBoundary } from "react-error-boundary";
import FeilMelding from "../components/feilmelding/Feilmelding";

const PosteringBundle: LazyExoticComponent<() => JSX.Element> = React.lazy(() => import(posteringUrl));

const Postering = () => {
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary fallbackRender={() => <FeilMelding />}>
        <PosteringBundle />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default Postering;
