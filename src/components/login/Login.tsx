import { Heading } from "@navikt/ds-react";
import useStore, { selectIsError } from "../../store/store";

const Login = () => {
  const isError = useStore<boolean>(selectIsError);
  return (
    <Heading level="1" size="medium" className="text-center">
      <Heading level="1" size="large" spacing>
        Login
      </Heading>
      <div id="info" className="space-y-3"></div>
    </Heading>
  );
};

export default Login;
