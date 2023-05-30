import { Alert } from "@navikt/ds-react";
import styles from "./Feilmelding.module.css";

type FeilmeldingProps = {
  feilmelding?: string;
};

const FeilMelding = ({ feilmelding }: FeilmeldingProps) => {
  return (
    <>
      <Alert variant="error" className={styles.feilmelding}>
        {feilmelding ?? "Dette er en feilmelding"}
      </Alert>
    </>
  );
};

export default FeilMelding;
