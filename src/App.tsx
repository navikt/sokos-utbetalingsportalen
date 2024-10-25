import { Route, Routes } from "react-router-dom";
import Microfrontend from "./Microfrontend";
import { Apps } from "./MicrofrontendApp";
import { AuthProvider } from "./components/auth/AuthProvider";
import ErrorBoundary from "./components/error/ErrorBoundary";
import Layout from "./components/layout/Layout";
import ErrorPage, { NotFound } from "./pages/ErrorPage";
import Home from "./pages/Home";

export default function App() {
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
