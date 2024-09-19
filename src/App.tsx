import { Route, Routes } from "react-router-dom";
import Microfrontend from "./Microfrontend";
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider } from "./components/auth/AuthProvider";
import Utbetalingsportalen from "./components/layout/Utbetalingsportalen";
import { Apps } from "./models/apps";
import ErrorPage, { NoAccess, NotFound } from "./pages/ErrorPage";
import Home from "./pages/Home";

export default function App() {
  function microfrontendRoutes() {
    return Apps.map((app) => (
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
          <Route
            path="/"
            element={<Utbetalingsportalen />}
            errorElement={<ErrorPage />}
          >
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
