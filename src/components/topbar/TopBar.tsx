import { Dropdown, InternalHeader as Header } from "@navikt/ds-react";
import { Link, useLoaderData } from "react-router-dom";
import nav from "../../../assets/images/Hvit.png";
import { UserData } from "../../models/userData";
import styles from "TopBar.module.css";

const TopBar = () => {
  const userInfo = useLoaderData() as UserData;
  return (
    <Header>
      <div className={styles.topbar}>
        <img src={nav} alt="logo" />
      </div>
      <Header.Title as={Link} to={"/"} className={styles.topbar__link}>
        Utbetalingsportalen
      </Header.Title>
      <Dropdown>
        <Header.UserButton
          as={Dropdown.Toggle}
          name={userInfo.name}
          description={userInfo.navIdent}
          className={styles.topbar__userbutton}
        />
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
