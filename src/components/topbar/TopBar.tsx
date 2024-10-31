import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InternalHeader, Spacer } from "@navikt/ds-react";
import nav from "../../../assets/images/Hvit.png";
import { useAuthContext } from "../../auth/userAuth";
import styles from "./TopBar.module.css";

export default function TopBar() {
  const [title, setTitle] = useState("Utbetalingsportalen");

  useEffect(() => {
    const hostname = window.location.hostname;
    const clusterName = import.meta.env.VITE_NAIS_CLUSTER_NAME;

    if (hostname === "localhost") {
      setTitle("Utbetalingsportalen - Lokal");
    } else if (clusterName === "dev-gcp") {
      setTitle("Utbetalingsportalen - Dev");
    } else if (clusterName === "prod-gcp") {
      setTitle("Utbetalingsportalen - Prod");
    }
  }, []);

  const authContext = useAuthContext();
  return (
    <InternalHeader>
      <div className={styles["topbar-logo"]}>
        <img src={nav} alt="NAV logo" />
      </div>
      <InternalHeader.Title as={Link} to={"/"} className="border-none">
        {title}
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
  );
}
