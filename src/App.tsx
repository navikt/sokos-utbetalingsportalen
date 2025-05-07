import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useLocation } from "react-router";
import Microfrontend from "./Microfrontend";
import { AuthProvider } from "./components/auth/AuthProvider";
import ErrorBoundary from "./components/error/ErrorBoundary";
import Layout from "./components/layout/Layout";
import { MicrofrontendApp, MicrofrontendConfig } from "./config/microfrontend";
import ErrorPage, { NotFound } from "./pages/ErrorPage";
import Home from "./pages/Home";
import { getEnvironment } from "./utils/environment";
import { initGrafanaFaro } from "./utils/grafanaFaro";

export default function App() {
  const location = useLocation();
  const isProduction = getEnvironment() === "production";

  useEffect(() => {
    if (import.meta.env.MODE !== "mock") initGrafanaFaro();
  }, []);

  // Workaround som sørger for at browseren alltid laster siden på nytt
  // når frem- eller tilbakeknappene trykkes. ( https://jira.adeo.no/browse/TOB-4603 )
  // Årsaken er at react router (pr v7.1.5) ellers ofte (ikke alltid) låser seg når man
  // bruker back- og forward-knappene.
  useEffect(() => {
    const handleEvent = () => window.location.replace(window.location.pathname);
    window.addEventListener("popstate", handleEvent);
    return () => {
      window.removeEventListener("popstate", handleEvent);
    };
  }, []);

  useEffect(() => {
    const currentRoute = location.pathname;
    const appTitle =
      MicrofrontendConfig.find((app) => currentRoute.includes(app.route))
        ?.title || "";
    const title =
      currentRoute === "/"
        ? "Utbetalingsportalen"
        : `${appTitle} | Utbetalingsportalen`;

    document.title = title;
  }, [location]);

  function TheMicrofrontend(app: MicrofrontendApp) {
    return (
      <Microfrontend
        key={`Microfrontend ${app.title}`}
        url={app.url}
        adGroup={app.group}
      />
    );
  }

  function microfrontendRoutes() {
    return MicrofrontendConfig.sort((a, b) =>
      a.title.localeCompare(b.title),
    ).map((app) => (
      <Route key={app.title} path={app.route}>
        <Route
          index
          key={`${app.title}index`}
          element={TheMicrofrontend(app)}
        />
        <Route
          path={"*"}
          key={`${app.title}`}
          element={TheMicrofrontend(app)}
        />
      </Route>
    ));
  }

  return (
    <>
      {!isProduction && (
        <Helmet>
          <script
            async
            defer
            src="https://cdn.nav.no/team-researchops/sporing/sporing.js"
            data-host-url="https://umami.nav.no"
            data-website-id="e174f8d8-4082-4cb0-8280-b992d0a47901"
          ></script>
        </Helmet>
      )}
      <ErrorBoundary>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
              {microfrontendRoutes()}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}
