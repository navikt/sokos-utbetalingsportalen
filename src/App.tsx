import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { authenticationLoader, checkRouteAccess } from "./auth/authentication";
import { AzureAdGroupName } from "./auth/azureAdGroups";
import Layout from "./components/layout/Layout";
import { ROUTE_PATH } from "./models/routePath";
import Feilside, { NoAccess, NotFound } from "./pages/Feilside";
import Information from "./pages/Hjem";
import Mikrofrontend from "./Mikrofrontend";
import {
  sokosUpSkattekortURL,
  sokosMikrofrontendTemplateURL,
  sokosUpOrsURL,
  sokosUpOppdragsinfoURL,
  sokosUpKrpURL,
} from "./urls";

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path="/" element={<Layout />} loader={authenticationLoader} errorElement={<Feilside />}>
              <Route path="/" element={<Information />} loader={authenticationLoader} />
              <Route
                path={ROUTE_PATH.SOKOS_MIKROFRONTEND_TEMPLATE}
                element={<Mikrofrontend url={sokosMikrofrontendTemplateURL} includeGjelderId />}
                loader={checkRouteAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ)}
              />
              <Route
                path={ROUTE_PATH.SOKOS_UP_KRP}
                element={<Mikrofrontend url={sokosUpKrpURL} />}
                loader={checkRouteAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_KRP_READ)}
              />
              <Route
                path={ROUTE_PATH.SOKOS_UP_ORS}
                element={<Mikrofrontend url={sokosUpOrsURL} />}
                loader={checkRouteAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ORS_READ)}
              />
              <Route
                path={ROUTE_PATH.SOKOS_UP_SKATTEKORT}
                element={<Mikrofrontend url={sokosUpSkattekortURL} />}
                loader={checkRouteAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ)}
              />
              <Route
                path={`${ROUTE_PATH.SOKOS_UP_OPPDRAGSINFO}/*`}
                element={<Mikrofrontend url={sokosUpOppdragsinfoURL} includeGjelderId />}
                loader={checkRouteAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ)}
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
