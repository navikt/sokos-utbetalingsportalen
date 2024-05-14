import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Microfrontend from "./Microfrontend";
import { authenticationLoader, checkRouteAccess } from "./auth/authentication";
import Utbetalingsportalen from "./components/layout/Utbetalingsportalen";
import { Apps } from "./models/apps";
import ErrorPage, { NoAccess, NotFound } from "./pages/ErrorPage";
import Hjem from "./pages/Hjem";

const App = () => {
  const routes = Apps.map((app) => (
    <Route
      key={app.title}
      path={`${app.route}/*`}
      element={<Microfrontend url={app.url} />}
      loader={checkRouteAccess(app.group)}
    />
  ));

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route
              path="/"
              element={<Utbetalingsportalen />}
              loader={authenticationLoader}
              errorElement={<ErrorPage />}
            >
              <Route
                path="/"
                element={<Hjem />}
                loader={authenticationLoader}
              />
              {routes}
              <Route path="/forbidden" element={<NoAccess />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </>,
        ),
      )}
    />
  );
};

export default App;
