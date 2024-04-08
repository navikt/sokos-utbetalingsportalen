import { Alert } from "@navikt/ds-react";
import styles from "./Feilmelding.module.css";

const FeilMelding = (props: { error: Error }) => <>
  <Alert variant="error" className={styles.feilmelding}>
    {props.error.message
      ? "En feil har skjedd, meld inn sak i Porten"
      : "Noe gikk galt, prøv igjen. Hvis problemet vedvarer, meld inn sak i Porten"}
  </Alert>
</>;

export default FeilMelding;
