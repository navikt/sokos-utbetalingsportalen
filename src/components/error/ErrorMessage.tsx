import { Alert } from "@navikt/ds-react";
import styles from "./ErrorMessage.module.css";

export default function ErrorMessage(props: { error: Error }) {
  return (
    <>
      <Alert variant="error" className={styles.errormessage}>
        {props.error.message
          ? "En feil har skjedd, meld inn sak i Porten"
          : "Noe gikk galt, prøv igjen. Hvis problemet vedvarer, meld inn sak i Porten"}
      </Alert>
    </>
  );
}
