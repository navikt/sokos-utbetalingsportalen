import React from "react";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { attestasjonUrl } from "../urls";

const AttestasjonBundle = React.lazy(() => import(attestasjonUrl));

const Attestasjon = () => {
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary>
        <AttestasjonBundle />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default Attestasjon;
