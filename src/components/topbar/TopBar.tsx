import { Link, useLoaderData } from "react-router-dom";
import { Dropdown, InternalHeader as Header } from "@navikt/ds-react";
import nav from "../../../assets/images/Hvit.png";
import { UserData } from "../../models/userData";
import styles from "./TopBar.module.css";

const TopBar = () => {
  const userInfo = useLoaderData() as UserData;
  return (
    <Header>
      <div className={styles.topbar}>
        <img src={nav} alt="logo" />
      </div>
      <Header.Title as={Link} to={"/"} className="border-none">
        Utbetalingsportalen
      </Header.Title>
      <Dropdown>
        <div className={styles.topbar__userbutton}>
          <Header.UserButton
            as={Dropdown.Toggle}
            name={userInfo.name}
            description={userInfo.navIdent}
          />
        </div>
        <Dropdown.Menu>
          <Dropdown.Menu.List>
            <Dropdown.Menu.List.Item>Min profil</Dropdown.Menu.List.Item>
          </Dropdown.Menu.List>
        </Dropdown.Menu>
      </Dropdown>
    </Header>
  );
};

export default TopBar;
