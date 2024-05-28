import { Alert, BodyShort } from "@navikt/ds-react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = (props: { error: Error }) => (
  <>
    <Alert variant="error" className={styles.errormessage}>
      {props.error.message ? (
        <>
          <BodyShort size="medium" spacing>
            En feil har skjedd, meld inn sak i Porten
          </BodyShort>
          <BodyShort size="medium" spacing>
            Feilmelding: {props.error.message}
            {props.error.cause ? (
              <>
                <br />
                Årsak: {props.error.cause}
              </>
            ) : null}
          </BodyShort>
        </>
      ) : (
        <BodyShort size="medium" spacing>
          Noe gikk galt, prøv igjen. Hvis problemet vedvarer, meld inn sak i
          Porten
        </BodyShort>
      )}
    </Alert>
  </>
);

export default ErrorMessage;
