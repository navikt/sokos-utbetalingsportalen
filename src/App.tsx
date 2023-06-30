import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { authenticationLoader, checkAccessToMicrofrontend } from "./authentication/authentication";
import { AzureAdGroupName } from "./authentication/azureAdGroups";
import Layout from "./components/layout/Layout";
import SokosMikrofrontendTemplate from "./micro-frontend/SokosMikrofrontendTemplate";
import SokosOpSkattekort from "./micro-frontend/SokosOpSkattekort";
import UtbetalingFrontendPoc from "./micro-frontend/UtbetalingFrontendPoc";
import { Path } from "./models/Path";
import Feilside, { NoAccess, NotFound } from "./pages/Feilside";
import Information from "./pages/Information";

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
              <Route path={Path.SOKOS_OP_SKATTEKORT} element={<SokosOpSkattekort />} />
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
