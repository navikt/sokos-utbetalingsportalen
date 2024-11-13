import { Link } from "react-router-dom";
import { InternalHeader, Spacer } from "@navikt/ds-react";
import nav from "../../../assets/images/Hvit.png";
import { useAuthContext } from "../../auth/userAuth";
import styles from "./TopBar.module.css";

export default function TopBar() {
  const authContext = useAuthContext();
  return (
    <div className={styles["topbar-container"]}>
      <InternalHeader>
        <div className={styles["topbar-logo"]}>
          <img src={nav} alt="NAV logo" />
        </div>
        <InternalHeader.Title as={Link} to={"/"} className="border-none">
          Utbetalingsportalen
        </InternalHeader.Title>
        <a href="#main-content" className="sr-only">
          Hopp til hovedinnhold
        </a>
        <Spacer />
        <InternalHeader.User
          name={authContext.userData.name}
          description={authContext.userData.navIdent}
        />
      </InternalHeader>
    </div>
  );
}
