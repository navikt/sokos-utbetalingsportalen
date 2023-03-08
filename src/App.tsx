import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hjem from "./components/hjem/Hjem";
import Layout from "./components/layout/Layout";
import Meny from "./components/meny/Meny";
import Attestasjon from "./micro-frontend/Attestasjon";
import useStore, { selectIsError } from "./store/store";

const App = () => {
  const isError = useStore<boolean>(selectIsError);

  return (
    <Router>
      <Meny />
      <Layout isError={isError}>
        <Routes>
          <Route path="/" element={<Hjem />} />
          <Route path="/attestasjon" element={<Attestasjon />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
