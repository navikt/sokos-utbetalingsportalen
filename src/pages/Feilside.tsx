import { ChatExclamationmarkIcon } from "@navikt/aksel-icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { BodyShort, Heading, Link } from "@navikt/ds-react";

export type FeilsideProps = {
  tittel?: string;
  melding?: string;
};
const Feilside = ({ tittel = "Feil", melding = "En feil har skjedd!" }: FeilsideProps) => (
  <>
    <ChatExclamationmarkIcon title="a11y-title" fontSize="6rem" />
    <Heading level="1" size={"medium"}>
      {tittel}
    </Heading>
    <BodyShort>{melding}</BodyShort>
    <Link as={ReactRouterLink} to={".."} relative={"path"}>
      Tilbake til startsiden
    </Link>
  </>
);
export default Feilside;

export const NoAccess = () => <Feilside tittel={"Mangler tilgang"} melding={"Du har ikke tilgang til denne siden!"} />;

export const NotFound = () => (
  <Feilside tittel={"Siden finnes ikke"} melding={"Du har forsøkt å gå inn på en side som ikke eksisterer!"} />
);
