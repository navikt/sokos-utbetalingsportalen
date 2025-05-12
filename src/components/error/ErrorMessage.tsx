import { Alert } from "@navikt/ds-react";

export default function ErrorMessage(props: { error: Error }) {
  return (
    <>
      <Alert variant="error">
        {props.error.message
          ? "En feil har skjedd, prøv igjen!"
          : "Noe gikk galt, prøv igjen. Hvis problemet vedvarer, meld inn sak i Porten."}
      </Alert>
    </>
  );
}
