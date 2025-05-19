import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "@components/error/ErrorMessage.tsx";
import ContentLoader from "@components/loader/ContentLoader.tsx";

type MicrofrontendType = {
  url: string;
  "client:only"?: string;
};

function createMicrofrontendBundle(url: string) {
  return React.lazy(() => import(/* @vite-ignore */ url));
}

export default function Microfrontend(props: MicrofrontendType) {
  const MicrofrontendBundle = createMicrofrontendBundle(props.url);

  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary FallbackComponent={ErrorMessage}>
        <MicrofrontendBundle />
      </ErrorBoundary>
    </React.Suspense>
  );
}
