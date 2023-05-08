import React, { LazyExoticComponent } from "react";
import ContentLoader from "../components/loader/ContentLoader.js";
import { utbetalingFrontendPocUrl } from "../urls.js";
import { ErrorBoundary } from "react-error-boundary";
import FeilMelding from "../components/feilmelding/Feilmelding";
import ReactDOM from "react-dom/client";

const UtbetalingFrontendPocBundle: LazyExoticComponent<() => JSX.Element> = React.lazy(
  () => import(/* @vite-ignore */ utbetalingFrontendPocUrl)
);

class UtbetalingFrontendPoc extends HTMLElement {
  connectedCallback() {
    const shadow = document.createElement("shadow");
    shadow.setAttribute("id", "shadow");
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(shadow);

    const render = ReactDOM.createRoot(document.getElementById("shadow") as HTMLElement);
    render.render(
      <React.Suspense fallback={<ContentLoader />}>
        <ErrorBoundary fallbackRender={() => <FeilMelding />}>
          <UtbetalingFrontendPocBundle />
        </ErrorBoundary>
      </React.Suspense>
    );
  }
}

export default UtbetalingFrontendPoc;
