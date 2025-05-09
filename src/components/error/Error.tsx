import { ChatExclamationmarkIcon } from "@navikt/aksel-icons";
import { BodyShort, Heading, Link } from "@navikt/ds-react";
import styles from "./Error.module.css";

type ErrorPageType = {
  title?: string;
  message?: string;
};

export default function Error({
  title = "Feil",
  message = "En feil har skjedd! Prøv logg inn på nytt.",
}: ErrorPageType) {
  return (
    <div className={styles["error"]}>
      <ChatExclamationmarkIcon
        title="Chat exclamationmark ikon"
        fontSize="6rem"
      />
      <Heading level="1" size={"medium"}>
        {title}
      </Heading>
      <BodyShort>{message}</BodyShort>
      <Link href="/" variant="action">
        Tilbake til startsiden
      </Link>
    </div>
  );
}
