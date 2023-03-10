import React from "react";
import useStore, { selectSetIsLoggedIn } from "../store/store";
import { redirect } from "react-router";
import { baseUrl } from "../urls";
import { Button } from "@navikt/ds-react";

function Login() {
  const setIsLoggedIn = useStore(selectSetIsLoggedIn);

  const autoriser = () => {
    setIsLoggedIn(true);
    redirect(baseUrl);
  };

  return <Button onClick={autoriser}>Logg inn</Button>;
}

export default Login;
