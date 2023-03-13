import { Heading } from "@navikt/ds-react";
import HjemCSS from "./Hjem.module.css";
import useStore, { selectIsError } from "../../store/store";

const Hjem = () => {
  const isError = useStore<boolean>(selectIsError);
  return (
    <Heading level="1" size="medium" className="text-center">
      <div className={HjemCSS.moro}></div>
      The red fox jumps over the lazy brown dog. Helse: {isError ? "Oida" : "All's Well"}
    </Heading>
  );
};

export default Hjem;
