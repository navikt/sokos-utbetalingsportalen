import { Alert } from "@navikt/ds-react";
import React from "react";
import FeilmeldingCSS from "./Feilmelding.module.css";

const FeilMelding = (): JSX.Element => {
  return (
    <Alert variant="error" className={FeilmeldingCSS.feilmelding}>
      Dette er en feilmelding
    </Alert>
  );
};

export default FeilMelding;
