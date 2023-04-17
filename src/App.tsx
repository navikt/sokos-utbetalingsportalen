import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import SokosMikrofrontendTemplate from "./micro-frontend/SokosMikrofrontendTemplate";
import UtbetalingFrontendPoc from "./micro-frontend/UtbetalingFrontendPoc";
import { Path } from "./models/path";
import Information from "./pages/Information";

const App = () => {
  return (
    <Router>
      <TopBar />
      <div className="flex ">
        <SideBar />
        <Layout>
          <Routes>
            <Route path="/" element={<Information />} />
            <Route path={Path.SOKOS_MIKROFRONTEND_TEMPLATE} element={<SokosMikrofrontendTemplate />} />
            <Route path={Path.UTBETALINGER_FRONTEND_POC} element={<UtbetalingFrontendPoc />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
