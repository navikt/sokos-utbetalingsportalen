import React from "react";
import classes from "./Feilside.module.css";
import { ChatExclamationmarkIcon } from "@navikt/aksel-icons";

export type FeilsideProps = {
  tittel: string;
  melding: string;
};
const Feilside = (props: FeilsideProps) => {
  return (
    <div className={classes["error-container"]}>
      <ChatExclamationmarkIcon title="a11y-title" fontSize="6rem" />
      <h2 className={classes["error-heading"]}>{props.tittel}</h2>
      <div className={classes["error-message"]}>{props.melding}</div>
    </div>
  );
};

export default Feilside;
