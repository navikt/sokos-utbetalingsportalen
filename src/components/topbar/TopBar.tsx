import { Link, useLoaderData } from "react-router-dom";
import { InternalHeader, Spacer } from "@navikt/ds-react";
import nav from "../../../assets/images/Hvit.png";
import { UserData } from "../../models/userData";
import styles from "./TopBar.module.css";

const TopBar = () => {
  const userInfo = useLoaderData() as UserData;
  return (
    <InternalHeader>
      <div className={styles.topbar__logo}>
        <img src={nav} alt="logo" />
      </div>
      <InternalHeader.Title as={Link} to={"/"} className="border-none">
        Utbetalingsportalen
      </InternalHeader.Title>
      <Spacer />
      <InternalHeader.User
        name={userInfo.name}
        description={userInfo.navIdent}
      />
    </InternalHeader>
  );
};

export default TopBar;
