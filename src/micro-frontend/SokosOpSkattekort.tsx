import React, { LazyExoticComponent } from "react";
import ContentLoader from "../components/loader/ContentLoader.js";
import { skattekortUrl } from "../urls.js";
import { ErrorBoundary } from "react-error-boundary";
import FeilMelding from "../components/feilmelding/Feilmelding";

const SokosOpSkattekortBundle: LazyExoticComponent<() => React.ReactElement> = React.lazy(
  () => import(/* @vite-ignore */ skattekortUrl)
);

const SokosOpSkattekort = () => {
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary fallbackRender={() => <FeilMelding />}>
        <SokosOpSkattekortBundle />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default SokosOpSkattekort;
