import styles from "./Feilside.module.css";
import { ChatExclamationmarkIcon } from "@navikt/aksel-icons";
import { Link } from "react-router-dom";

export type FeilsideProps = {
  tittel: string;
  melding: string;
  knapp?: any;
};
const Feilside = ({ tittel, melding }: FeilsideProps) => (
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

export default Feilside;
