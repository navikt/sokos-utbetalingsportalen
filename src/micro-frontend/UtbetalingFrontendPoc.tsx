import React, { LazyExoticComponent } from "react";
import ContentLoader from "../components/loader/ContentLoader.js";
import { utbetalingFrontendPocUrl } from "../urls.js";
import { ErrorBoundary } from "react-error-boundary";
import FeilMelding from "../components/feilmelding/Feilmelding";

const UtbetalingFrontendPocBundle: LazyExoticComponent<() => JSX.Element> = React.lazy(
  () => import(utbetalingFrontendPocUrl)
);

const UtbetalingFrontendPoc = () => {
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary fallbackRender={() => <FeilMelding />}>
        <UtbetalingFrontendPocBundle />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default UtbetalingFrontendPoc;
