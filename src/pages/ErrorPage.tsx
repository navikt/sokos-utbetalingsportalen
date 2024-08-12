import { ChatExclamationmarkIcon } from "@navikt/aksel-icons";
import { BodyShort, Heading, Link } from "@navikt/ds-react";

export type ErrorPageProps = {
  title?: string;
  message?: string;
};
const ErrorPage = ({
  title = "Feil",
  message = "En feil har skjedd!",
}: ErrorPageProps) => (
  <>
    <ChatExclamationmarkIcon title="a11y-title" fontSize="6rem" />
    <Heading level="1" size={"medium"}>
      {title}
    </Heading>
    <BodyShort>{message}</BodyShort>
    <Link href="/" variant="action">
      Tilbake til startsiden
    </Link>
  </>
);
export default ErrorPage;

export const NoAccess = () => (
  <ErrorPage
    title={"Mangler tilgang"}
    message={"Du har ikke tilgang til denne siden!"}
  />
);

export const NotFound = () => (
  <ErrorPage
    title={"Siden finnes ikke"}
    message={"Du har forsøkt å gå inn på en side som ikke eksisterer!"}
  />
);
