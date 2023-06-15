import React, { LazyExoticComponent } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FeilMelding from "../components/feilmelding/Feilmelding.js";
import ContentLoader from "../components/loader/ContentLoader.js";
import { sokosMikrofrontendTemplateUrl } from "../urls.js";
import useStore, { selectGjelderID } from "../store/store";

const SokosMikrofrontendTemplateBundle: LazyExoticComponent<
  ({ gjelderId }: { gjelderId: string }) => React.ReactElement
> = React.lazy(() => import(/* @vite-ignore */ sokosMikrofrontendTemplateUrl));

const SokosMikrofrontendTemplate = () => {
  const gjelderId = useStore(selectGjelderID);
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary fallbackRender={() => <FeilMelding />}>
        <SokosMikrofrontendTemplateBundle gjelderId={gjelderId} />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default SokosMikrofrontendTemplate;
