import { System } from "@navikt/ds-icons";
import { Dropdown, Header } from "@navikt/ds-react-internal";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Popover, Button } from "@navikt/ds-react";
import useStore, { selectLanguage } from "../../store/store";

const Meny = () => {
  const language = useStore(selectLanguage);
  const buttonRef = useRef(null);
  const [openState, setOpenState] = useState(false);

  return (
    <>
      <Button ref={buttonRef} onClick={() => setOpenState(true)}>
        Åpne popover
      </Button>
      <Popover open={openState} onClose={() => setOpenState(false)} anchorEl={buttonRef.current} placement="top">
        <Popover.Content>Innhold her!</Popover.Content>
      </Popover>
    </>
  );
};

export default Meny;
