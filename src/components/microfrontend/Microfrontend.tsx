import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import type { UserData } from "../../types/UserData.ts";
import ErrorMessage from "../error/ErrorMessage.tsx";
import ContentLoader from "../loader/ContentLoader.tsx";

type MicrofrontendType = {
  url: string;
  userData: UserData;
};

function createMicrofrontendBundle(url: string) {
  return React.lazy(() => import(/* @vite-ignore */ url));
}

export default function Microfrontend(props: MicrofrontendType) {
  const MicrofrontendBundle = createMicrofrontendBundle(props.url);

  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary FallbackComponent={ErrorMessage}>
        <main id="main-content">
          <MicrofrontendBundle />
        </main>
      </ErrorBoundary>
    </React.Suspense>
  );
}
