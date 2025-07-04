import { Alert } from "@navikt/ds-react";

interface ErrorAlertProps {
  error: string | undefined | null;
}

export default function ErrorAlert({ error }: ErrorAlertProps) {
  return (
    <Alert variant="error">
      {error ? error : "Ukjent feil har skjedd. Ta kontakt med Jonas The King"}
    </Alert>
  );
}
