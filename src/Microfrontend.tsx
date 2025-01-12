import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router";
import { checkRouteAccess, useAuthContext } from "./auth/userAuth";
import ErrorMessage from "./components/error/ErrorMessage";
import ContentLoader from "./components/loader/ContentLoader";
import { NoAccess } from "./pages/ErrorPage";

type MicrofrontendType = {
  url: string;
  adGroup: string;
};

function createMicrofrontendBundle(url: string) {
  return React.lazy(() => import(/* @vite-ignore */ url));
}

export default function Microfrontend(props: MicrofrontendType) {
  const authContext = useAuthContext();
  const location = useLocation();

  if (!checkRouteAccess(authContext.userData, props.adGroup)) {
    return <NoAccess />;
  }

  const MicrofrontendBundle = createMicrofrontendBundle(props.url);

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
