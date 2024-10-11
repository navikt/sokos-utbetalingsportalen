import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";
import { AzureAdGroupNames } from "./auth/azureAdGroups";
import {
  checkRouteAccess,
  useAuthContext,
} from "./components/auth/AuthProvider";
import ErrorMessage from "./components/error/ErrorMessage";
import ContentLoader from "./components/loader/ContentLoader";

type MicrofrontendType = {
  url: string;
  adGroup: AzureAdGroupNames;
};

function createMicrofrontendBundle(url: string) {
  return React.lazy(() => import(/* @vite-ignore */ url));
}

export default function Microfrontend(props: MicrofrontendType) {
  const authContext = useAuthContext();

  checkRouteAccess(authContext.userData, props.adGroup);
  const MicrofrontendBundle = createMicrofrontendBundle(props.url);
  const location = useLocation();

  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary FallbackComponent={ErrorMessage} key={location.pathname}>
        <main id="main-content">
          <MicrofrontendBundle />
        </main>
      </ErrorBoundary>
    </React.Suspense>
  );
}
