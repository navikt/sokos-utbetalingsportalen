import React, { LazyExoticComponent } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FeilMelding from "./components/feilmelding/Feilmelding";
import ContentLoader from "./components/loader/ContentLoader";
import useStore, { selectGjelderID } from "./store/store";

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

const Mikrofrontend: React.FC<MikrofrontendProps> = ({ url, includeGjelderId = false }) => {
  const gjelderId = useStore(selectGjelderID);
  const MikrofrontendBundle = createMikrofrontendBundle(url);

  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary fallbackRender={() => <FeilMelding />}>
        <MikrofrontendBundle gjelderId={includeGjelderId ? gjelderId : null} />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default Mikrofrontend;
