import React from "react";
import HjemCSS from "./Hjem.module.css";

const Hjem = () => {
  return (
    <div className={HjemCSS.hjem}>
      <h1>
        Landingside etter login og landingside når "hjem" knappen trykkes øverst i venstre hjørne på teksten
        "Økonomiportalen"
      </h1>
    </div>
  );
};

export default Hjem;
