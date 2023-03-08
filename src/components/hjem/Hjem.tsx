import React from "react";
import { Heading } from "@navikt/ds-react";
import HjemCSS from "./Hjem.module.css";
import useIsErrorStore, { selectIsError } from "../../store/store";

const Hjem = (): JSX.Element => {
  const isError = useIsErrorStore<boolean>(selectIsError);
  return (
    <Heading level="1" size="medium" className="text-center">
      <div className={HjemCSS.moro}></div>
      The red fox jumps over the lazy brown dog. Helse: {isError ? "Oida" : "All's Well"}
    </Heading>
  );
};

export default Hjem;
