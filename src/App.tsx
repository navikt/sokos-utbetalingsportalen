import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { authenticationLoader, checkRouteAccess } from "./auth/authentication";
import Feilside, { NoAccess, NotFound } from "./pages/Feilside";
import Mikrofrontend from "./Mikrofrontend";
import Utbetalingsportalen from "./components/layout/Utbetalingsportalen";
import Hjem from "./pages/Hjem";
import { Apper } from "./models/apper";

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
            <Route path="/" element={<Utbetalingsportalen />} loader={authenticationLoader} errorElement={<Feilside />}>
              <Route path="/" element={<Hjem />} loader={authenticationLoader} />
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
