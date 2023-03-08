import { Alert } from "@navikt/ds-react";
import FeilmeldingCSS from "./Feilmelding.module.css";

const FeilMelding = () => {
  return (
    <Alert variant="error" className={FeilmeldingCSS.feilmelding}>
      Dette er en feilmelding
    </Alert>
  );
};

export default FeilMelding;
