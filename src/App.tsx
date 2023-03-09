import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hjem from "./components/hjem/Hjem";
import Layout from "./components/layout/Layout";
import Meny from "./components/meny/Meny";
import Attestasjon from "./micro-frontend/Attestasjon";

const App = () => {
  return (
    <Router>
      <Meny />
      <Layout>
        <Routes>
          <Route path="/" element={<Hjem />} />
          <Route path="/attestasjon" element={<Attestasjon />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
