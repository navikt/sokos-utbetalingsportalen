import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";
import ErrorMessage from "./components/feilmelding/ErrorMessage";
import ContentLoader from "./components/loader/ContentLoader";

type MicrofrontendProps = {
  url: string;
};

const createMicrofrontendBundle = (url: string) => {
  return React.lazy(() => import(/* @vite-ignore */ url));
};

const Microfrontend: React.FC<MicrofrontendProps> = ({ url }) => {
  const MicrofrontendBundle = createMicrofrontendBundle(url);
  const location = useLocation();
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary FallbackComponent={ErrorMessage} key={location.pathname}>
        <MicrofrontendBundle />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default Microfrontend;
