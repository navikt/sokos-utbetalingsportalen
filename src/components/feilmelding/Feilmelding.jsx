import React from "react";
import { Alert } from "@navikt/ds-react";
import useStore, { selectLanguage } from "../../store/store";
import { text } from "../../language/text";
import FeilmeldingCSS from "./Feilmelding.module.css";

const FeilMelding = () => {
  const language = useStore(selectLanguage);

  return (
    <Alert variant="error" className={FeilmeldingCSS.feilmelding}>
      {text.feilmelding[language]}
    </Alert>
  );
};

export default FeilMelding;
