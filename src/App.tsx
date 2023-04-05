import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Information from "./pages/Information";
import Layout from "./components/layout/Layout";
import TopBar from "./components/topbar/TopBar";
import Mikrofrontend from "./micro-frontend/Mikrofrontend";
import Attestasjon from "./micro-frontend/Attestasjon";
import Postering from "./micro-frontend/Postering";
import SideBar from "./components/sidebar/SideBar";

const App = () => {
  return (
    <Router>
      <TopBar />
      <div className="flex ">
        <SideBar />
      </div>
      <Layout>
        <Routes>
          <Route path="/" element={<Information />} />
          <Route path="/mikrofrontend" element={<Mikrofrontend />} />
          <Route path="/attestasjon" element={<Attestasjon />} />
          <Route path="/postering" element={<Postering />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
