import React, { LazyExoticComponent } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FeilMelding from "./components/feilmelding/Feilmelding";
import ContentLoader from "./components/loader/ContentLoader";
import { useLocation } from "react-router-dom";

type MikrofrontendProps = {
  url: string;
  includeGjelderId?: boolean;
};

type MikrofrontendBundleProps = {
  gjelderId?: string | null;
};

const createMikrofrontendBundle = (url: string): LazyExoticComponent<React.ComponentType<MikrofrontendBundleProps>> => {
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
