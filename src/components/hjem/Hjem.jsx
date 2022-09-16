import React from "react";
import { Heading } from "@navikt/ds-react";
import HjemCSS from "./Hjem.module.css";

const Hjem = () => {
  return (
    <Heading level="1" size="medium" className="text-center">
      The red fox jumps over the lazy brown dog.
    </Heading>
  );
};

export default Hjem;
