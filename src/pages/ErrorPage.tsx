import { ChatExclamationmarkIcon } from "@navikt/aksel-icons";
import { BodyShort, Heading, Link } from "@navikt/ds-react";
import styles from "./ErrorPage.module.css";

export type ErrorPageType = {
  title?: string;
  message?: string;
};

export default function ErrorPage({
  title = "Feil",
  message = "En feil har skjedd!",
}: ErrorPageType) {
  return (
    <div className={styles.errorPage}>
      <ChatExclamationmarkIcon title="a11y-title" fontSize="6rem" />
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

export function NoAccess() {
  return (
    <ErrorPage
      title={"Mangler tilgang"}
      message={"Du har ikke tilgang til denne siden!"}
    />
  );
}

export function NotFound() {
  return (
    <ErrorPage
      title={"Siden finnes ikke"}
      message={"Du har forsøkt å gå inn på en side som ikke eksisterer!"}
    />
  );
}
