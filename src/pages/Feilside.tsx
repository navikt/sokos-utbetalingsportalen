import classes from "./Feilside.module.css";
import { ChatExclamationmarkIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";
import { useNavigate } from "react-router";

export type FeilsideProps = {
  tittel: string;
  melding: string;
  knapp?: any;
};
const Feilside = ({ tittel, melding, knapp }: FeilsideProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className={classes["error-container"]}>
      <ChatExclamationmarkIcon title="a11y-title" fontSize="6rem" />
      <h2 className={classes["error-heading"]}>{tittel}</h2>
      <div className={classes["error-message"]}>{melding}</div>
      {knapp && <Button onClick={handleClick}>Gå tilbake</Button>}
    </div>
  );
};

export default Feilside;
