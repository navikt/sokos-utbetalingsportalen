import React from "react";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary.js";
import ContentLoader from "../components/loader/ContentLoader.js";
import { attestasjonUrl } from "../urls.js";

const AttestasjonBundle = React.lazy(async (): Promise<any> => await import(attestasjonUrl));

const Attestasjon = (): JSX.Element => {
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary>
        <AttestasjonBundle />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default Attestasjon;
