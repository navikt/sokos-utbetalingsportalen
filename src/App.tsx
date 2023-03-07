import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hjem from "./components/hjem/Hjem";
import Layout from "./components/layout/Layout";
import Meny from "./components/meny/Meny";
import Attestasjon from "./micro-frontend/Attestasjon";
import useIsErrorStore, { selectSetIsError } from "./store/store";
import classes from "./App.module.css";

const App = () => {
  const setIsError = useIsErrorStore(selectSetIsError);

  return (
    <Router>
      <Meny />
      <button className={classes.button_bra} onClick={() => setIsError(false)}>
        REDDA
      </button>
      <button className={classes.button_dumt} onClick={() => setIsError(true)}>
        FEIL
      </button>
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
