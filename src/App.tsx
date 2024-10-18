import { Route, Routes } from "react-router-dom";
import Microfrontend from "./Microfrontend";
import { Apps } from "./MicrofrontendApp";
import { AuthProvider } from "./components/auth/AuthProvider";
import ErrorBoundary from "./components/error/ErrorBoundary";
import Layout from "./components/layout/Layout";
import ErrorPage, { NoAccess, NotFound } from "./pages/ErrorPage";
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
        <Routes>
          <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
            <Route path="/" element={<Home />} />
            {microfrontendRoutes()}
            <Route path="/forbidden" element={<NoAccess />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ErrorBoundary>
  );
}
