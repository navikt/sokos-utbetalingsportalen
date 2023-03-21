import React, { LazyExoticComponent } from "react";
import ContentLoader from "../components/loader/ContentLoader.js";
import { mikrofrontendUrl } from "../urls.js";
import { ErrorBoundary } from "react-error-boundary";
import FeilMelding from "../components/feilmelding/Feilmelding";

const MikrofrontendBundle: LazyExoticComponent<() => JSX.Element> = React.lazy(() => import(mikrofrontendUrl));

const Mikrofrontend = () => {
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary fallbackRender={() => <FeilMelding />}>
        <MikrofrontendBundle />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default Mikrofrontend;
