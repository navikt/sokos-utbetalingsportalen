import React, { LazyExoticComponent } from "react";
import ContentLoader from "../components/loader/ContentLoader.js";
import { skattekortUrl } from "../urls.js";
import { ErrorBoundary } from "react-error-boundary";
import FeilMelding from "../components/feilmelding/Feilmelding";

const T: LazyExoticComponent<() => React.ReactElement> = React.lazy(() => import(/* @vite-ignore */ skattekortUrl));

const U = () => {
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary fallbackRender={() => <FeilMelding />}>
        <T />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default U;
