import React, { LazyExoticComponent } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FeilMelding from "../components/feilmelding/Feilmelding.js";
import ContentLoader from "../components/loader/ContentLoader.js";
import { sokosMikrofrontendTemplateUrl } from "../urls.js";

const SokosMikrofrontendTemplateBundle: LazyExoticComponent<
  ({ gjelderId }: { gjelderId: string }) => React.ReactElement
> = React.lazy(() => import(/* @vite-ignore */ sokosMikrofrontendTemplateUrl));

const SokosMikrofrontendTemplate = () => {
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary fallbackRender={() => <FeilMelding />}>
        <SokosMikrofrontendTemplateBundle gjelderId={"1234"} />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default SokosMikrofrontendTemplate;
