import { System } from "@navikt/ds-icons";
import { Dropdown, Header } from "@navikt/ds-react-internal";
import { Link } from "react-router-dom";
import useStore, { selectSetIsLoggedIn } from "../../store/store";
import nav from "../../../assets/images/Hvit.png";
import { TextField } from "@navikt/ds-react";

const TopBar = () => {
  const setIsLoggedIn = useStore(selectSetIsLoggedIn);
  const clickedLogoutHandler = () => setIsLoggedIn(false);
  return (
    <Header>
      <img src={nav} alt="logo" width={70} height={30} />
      <Header.Title as={Link} to={"/"}>
        Økonomiportalen
      </Header.Title>
      <div id="djelderIDDiv" className="flex items-stretch space-x-7 p-2">
        <div id="nr2" className="flex justify-center items-center">
          GjelderID:{" "}
        </div>
        <TextField label="" hideLabel size="small" />
      </div>
      <Dropdown>
        <Header.Button as={Dropdown.Toggle} className="ml-auto">
          <System style={{ fontSize: "1.5rem" }} title="Systemer og oppslagsverk" />
        </Header.Button>

        <Dropdown.Menu>
          <Dropdown.Menu.GroupedList>
            <Dropdown.Menu.GroupedList.Heading>Systemer og oppslagsverk</Dropdown.Menu.GroupedList.Heading>
            <Dropdown.Menu.GroupedList.Item as={Link} to={"/mikrofrontend"}>
              Mikrofrontend
            </Dropdown.Menu.GroupedList.Item>
          </Dropdown.Menu.GroupedList>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Header.UserButton as={Dropdown.Toggle} name="Ola Normann" description="Enhet: Skien" />
        <Dropdown.Menu>
          <Dropdown.Menu.List>
            <Dropdown.Menu.List.Item onClick={clickedLogoutHandler}>Logg ut</Dropdown.Menu.List.Item>
          </Dropdown.Menu.List>
        </Dropdown.Menu>
      </Dropdown>
    </Header>
  );
};

export default TopBar;
