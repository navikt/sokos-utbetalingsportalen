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

  return <Button onClick={autoriser}>Denne siden blir byttet ut med Azure Ad login. Trykk for å gå videre</Button>;
}

export default Login;
