import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";
import FeilMelding from "./components/feilmelding/Feilmelding";
import ContentLoader from "./components/loader/ContentLoader";

type MikrofrontendProps = {
  url: string;
};

const createMikrofrontendBundle = (url: string) => {
  return React.lazy(() => import(/* @vite-ignore */ url));
};

const Mikrofrontend: React.FC<MikrofrontendProps> = ({ url }) => {
  const MikrofrontendBundle = createMikrofrontendBundle(url);
  const location = useLocation();
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary FallbackComponent={FeilMelding} key={location.pathname}>
        <MikrofrontendBundle />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default Mikrofrontend;
