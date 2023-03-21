import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hjem from "./components/hjem/Hjem";
import Layout from "./components/layout/Layout";
import Meny from "./components/meny/Meny";
import Mikrofrontend from "./micro-frontend/Mikrofrontend";

const App = () => {
  return (
    <Router>
      <Meny />
      <Layout>
        <Routes>
          <Route path="/" element={<Hjem />} />
          <Route path="/mikrofrontend" element={<Mikrofrontend />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
