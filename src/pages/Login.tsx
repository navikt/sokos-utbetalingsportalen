import React from "react";
import useStore, { selectSetIsLoggedIn } from "../store/store";
import { redirect } from "react-router";
import { baseUrl } from "../urls";
import { BodyLong, Button, Heading, Panel, TextField } from "@navikt/ds-react";

function Login() {
  const setIsLoggedIn = useStore(selectSetIsLoggedIn);

  const autoriser = () => {
    setIsLoggedIn(true);
    redirect(baseUrl);
  };

  return (
    <div className="flex items-center justify-center">
      <Panel border className="text-center w-1/3">
        <Heading spacing level="3" size="large">
          Logg inn i Chappai
        </Heading>
        <BodyLong>
          <div id="divlogin" className="items-center justify-center">
            <TextField
              id="txtbrukerid"
              size="small"
              label={"BrukerId:"}
              className="p-3"
              type="text"
              description="f.eks: X123456"
            />
            <TextField id="txtpassord" size="small" label="Passord" className="p-3" type="password" />
            <Button onClick={autoriser} className="p">
              Trykk for å gå videre
            </Button>
          </div>
        </BodyLong>
      </Panel>
    </div>
  );
}

export default Login;
