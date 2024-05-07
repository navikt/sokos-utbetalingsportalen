import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Mikrofrontend from "./Mikrofrontend";
import { authenticationLoader, checkRouteAccess } from "./auth/authentication";
import Utbetalingsportalen from "./components/layout/Utbetalingsportalen";
import { Apper } from "./models/apper";
import Feilside, { NoAccess, NotFound } from "./pages/Feilside";
import Hjem from "./pages/Hjem";

const App = () => {
  const routes = Apper.map((app) => (
    <Route
      key={app.title}
      path={`${app.route}/*`}
      element={<Mikrofrontend url={app.url} />}
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
              errorElement={<Feilside />}
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
