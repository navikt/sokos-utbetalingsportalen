import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { authenticationLoader, checkRouteAccess } from "./auth/authentication";
import { AzureAdGroupName } from "./auth/azureAdGroups";
import Layout from "./components/layout/Layout";
import { ROUTE_PATH } from "./models/routePath";
import Feilside, { NoAccess, NotFound } from "./pages/Feilside";
import Information from "./pages/Information";
import Mikrofrontend from "./Mikrofrontend";
import { skattekortUrl, sokosMikrofrontendTemplateUrl, sokPosteringerUrl } from "./urls";

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path="/" element={<Layout />} loader={authenticationLoader} errorElement={<Feilside />}>
              <Route path="/" element={<Information />} />
              <Route
                path={ROUTE_PATH.SOKOS_MIKROFRONTEND_TEMPLATE}
                element={<Mikrofrontend url={sokosMikrofrontendTemplateUrl} includeGjelderId />}
                loader={checkRouteAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ)}
              />
              <Route
                path={ROUTE_PATH.SOKOS_OP_POSTERING_SOK}
                element={<Mikrofrontend url={sokPosteringerUrl} />}
                loader={checkRouteAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_POSTERINGSOK_READ_TMP)}
              />
              <Route
                path={ROUTE_PATH.SOKOS_OP_SKATTEKORT}
                element={<Mikrofrontend url={skattekortUrl} />}
                loader={checkRouteAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ)}
              />
              <Route path="/forbidden" element={<NoAccess />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </>,
        ),
      )}
    />
  );
};

export default App;
