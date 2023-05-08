import React, { LazyExoticComponent } from "react";
import ContentLoader from "../components/loader/ContentLoader.js";
import { utbetalingerUrl } from "../urls.js";
import { ErrorBoundary } from "react-error-boundary";
import FeilMelding from "../components/feilmelding/Feilmelding";

const UtbetalingerBundle: LazyExoticComponent<() => JSX.Element> = React.lazy(
  () => import(/* @vite-ignore */ utbetalingerUrl)
);

const Utbetalinger = () => {
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary fallbackRender={() => <FeilMelding />}>
        <UtbetalingerBundle />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default Utbetalinger;
