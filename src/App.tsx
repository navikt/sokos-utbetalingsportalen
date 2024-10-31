import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Microfrontend from "./Microfrontend";
import { Apps } from "./MicrofrontendApp";
import { AuthProvider } from "./components/auth/AuthProvider";
import ErrorBoundary from "./components/error/ErrorBoundary";
import Layout from "./components/layout/Layout";
import ErrorPage, { NotFound } from "./pages/ErrorPage";
import Home from "./pages/Home";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const currentRoute = location.pathname;
    const appTitle =
      Apps.find((app) => currentRoute.includes(app.route))?.title || "";
    const title =
      currentRoute === "/"
        ? "Utbetalingsportalen"
        : `${appTitle} | Utbetalingsportalen`;

    document.title = title;
  }, [location]);

  function microfrontendRoutes() {
    return Apps.sort((a, b) => a.title.localeCompare(b.title)).map((app) => (
      <Route
        key={app.title}
        path={`${app.route}/*`}
        element={<Microfrontend url={app.url} adGroup={app.group} />}
      />
    ));
  }

  return (
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
  );
}
