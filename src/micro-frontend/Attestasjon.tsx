import React, { LazyExoticComponent } from "react";
import ContentLoader from "../components/loader/ContentLoader.js";
import { attestasjonUrl } from "../urls.js";
import { ErrorBoundary } from "react-error-boundary";
import FeilMelding from "../components/feilmelding/Feilmelding";

const AttestasjonBundle: LazyExoticComponent<() => JSX.Element> = React.lazy(() => import(attestasjonUrl));

const Attestasjon = (): JSX.Element => {
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary fallbackRender={() => <FeilMelding />}>
        <AttestasjonBundle />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default Attestasjon;
