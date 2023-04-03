import { System } from "@navikt/ds-icons";
import { Dropdown, Header } from "@navikt/ds-react-internal";
import { Link } from "react-router-dom";
import useStore, { selectSetIsLoggedIn } from "../../store/store";
import nav from "../../../assets/images/Hvit.png";
import { Label, TextField } from "@navikt/ds-react";

const TopBar = () => {
  const setIsLoggedIn = useStore(selectSetIsLoggedIn);
  const clickedLogoutHandler = () => setIsLoggedIn(false);
  return (
    <Header>
      <div className="w-16 p-1 ml-3">
        <img src={nav} alt="logo" />
      </div>
      <Header.Title as={Link} to={"/"}>
        Økonomiportalen
      </Header.Title>
      <div id="gjelder-id" className="w-fit flex justify-end items-stretch space-x-7 p-2 ">
        <div id="gjelder-id-tekst" className="flex justify-center items-center">
          <Label>GjelderID: </Label>
        </div>
        <TextField label="" hideLabel size="small" />
      </div>
      <Dropdown>
        <Header.UserButton as={Dropdown.Toggle} name="Ola Normann" description="x143765" className="ml-auto" />
        <Dropdown.Menu>
          <Dropdown.Menu.List>
            <Dropdown.Menu.List.Item>Min profil</Dropdown.Menu.List.Item>
            <Dropdown.Menu.List.Item onClick={clickedLogoutHandler}>Logg ut</Dropdown.Menu.List.Item>
          </Dropdown.Menu.List>
        </Dropdown.Menu>
      </Dropdown>
    </Header>
  );
};

export default TopBar;
