import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { authenticationLoader, checkAccessToMicrofrontend } from "./authentication/authentication";
import Layout from "./components/layout/Layout";
import SokosMikrofrontendTemplate from "./micro-frontend/SokosMikrofrontendTemplate";
import UtbetalingFrontendPoc from "./micro-frontend/UtbetalingFrontendPoc";
import { Path } from "./models/path";
import Feilside, { NotFound, NoAccess } from "./pages/Feilside";
import Information from "./pages/Information";
import { AzureAdGroupName } from "./authentication/azureAdGroups";
import SokosOpSkattekort from "./micro-frontend/SokosOpSkattekort";

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path="/" element={<Layout />} loader={authenticationLoader} errorElement={<Feilside />}>
              <Route path="/" element={<Information />} />
              <Route
                path={Path.SOKOS_MIKROFRONTEND_TEMPLATE}
                element={<SokosMikrofrontendTemplate />}
                loader={checkAccessToMicrofrontend(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ)}
              />
              <Route
                path={Path.UTBETALINGER}
                element={<UtbetalingFrontendPoc />}
                loader={checkAccessToMicrofrontend(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_UTBETALINGER_READ)}
              />
              <Route path={Path.SOKOSOPSKATTEKORT} element={<SokosOpSkattekort />} />
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
