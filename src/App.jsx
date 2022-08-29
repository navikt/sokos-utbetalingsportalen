import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Attestasjon from "./micro-frontend/Attestasjon";
import useStore, { selectIsError } from "./store/store";

const App = () => {
  const isError = useStore(selectIsError);

  return (
    <Router>
      <Layout isError={isError}>
        <Routes>
          <Route path="/attestasjon" exact element={<Attestasjon />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
