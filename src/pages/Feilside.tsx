import styles from "./Feilside.module.css";
import { ChatExclamationmarkIcon } from "@navikt/aksel-icons";
import { Link } from "react-router-dom";

export type FeilsideProps = {
  tittel?: string;
  melding?: string;
};
const Feilside = (props: FeilsideProps) => {
  const { tittel = "Feil", melding = "En feil har skjedd!" } = props;
  return (
    <div className={styles["error-container"]}>
      <ChatExclamationmarkIcon title="a11y-title" fontSize="6rem" />
      <h2 className={styles["error-heading"]}>{tittel}</h2>
      <div className={styles["error-message"]}>{melding}</div>
      <p>
        <Link to={".."} relative={"path"}>
          Gå tilbake
        </Link>
      </p>
    </div>
  );
};
export default Feilside;

export const NoAccess = () => <Feilside tittel={"Mangler tilgang"} melding={"Du har ikke tilgang til denne siden!"} />;

export const NotFound = () => (
  <Feilside tittel={"Siden finnes ikke"} melding={"Du har forsøkt å gå inn på en side som ikke eksisterer!"} />
);
