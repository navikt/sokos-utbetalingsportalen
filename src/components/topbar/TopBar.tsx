import { Dropdown, Header } from "@navikt/ds-react-internal";
import { Link } from "react-router-dom";
import useStore, { selectGjelderID, selectSetGjelderID, selectUserInfo } from "../../store/store";
import nav from "../../../assets/images/Hvit.png";
import { Label, TextField } from "@navikt/ds-react";
import { Path } from "../../models/path";
import { baseUrl } from "../../urls";

const TopBar = () => {
  const setGjelderId = useStore(selectSetGjelderID);
  const userInfo = useStore(selectUserInfo);
  const gjelderId = useStore(selectGjelderID);

  const clickedLogoutHandler = () => {
    fetch(Path.LOG_OUT);
    window.location.href = baseUrl;
  };

  const handleGjelderIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGjelderId(event.target.value);
  };

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
        <TextField label="" hideLabel size="small" onBlur={handleGjelderIdChange} />
        <p>{gjelderId}</p>
      </div>
      <Dropdown>
        <Header.UserButton
          as={Dropdown.Toggle}
          name={userInfo.name}
          description={userInfo.NAVident}
          className="ml-auto"
        />
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
