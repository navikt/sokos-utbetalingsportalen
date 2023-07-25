import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { authenticationLoader, checkAccessToMicrofrontend } from "./authentication/authentication";
import { AzureAdGroupName } from "./authentication/azureAdGroups";
import Layout from "./components/layout/Layout";
import { ROUTE_PATH } from "./models/RoutePath";
import Feilside, { NoAccess, NotFound } from "./pages/Feilside";
import Information from "./pages/Information";
import Mikrofrontend from "./Mikrofrontend";
import { skattekortUrl, sokosMikrofrontendTemplateUrl, utbetalingFrontendPocUrl } from "./urls";

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
                loader={checkAccessToMicrofrontend(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ)}
              />
              <Route
                path={ROUTE_PATH.UTBETALINGER_FRONTEND_POC}
                element={<Mikrofrontend url={utbetalingFrontendPocUrl} />}
                loader={checkAccessToMicrofrontend(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ)}
              />
              <Route
                path={ROUTE_PATH.SOKOS_OP_SKATTEKORT}
                element={<Mikrofrontend url={skattekortUrl} />}
                loader={checkAccessToMicrofrontend(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ)}
              />
              <Route path="/forbidden" element={<NoAccess />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </>
        )
      )}
    />
  );
};

export default App;
