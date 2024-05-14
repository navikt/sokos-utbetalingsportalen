import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BodyLong, GuidePanel, Heading, Switch } from "@navikt/ds-react";
import pengesekk from "../../assets/images/pengesekk.svg";
import AppCard from "../components/appcard/AppCard";
import useApps from "../hooks/useApps";
import { UserData } from "../models/userData";
import styles from "./Hjem.module.css";

const Hjem = () => {
  const userInfo = useLoaderData() as UserData;
  const [showUnauthorized, setShowUnauthorized] = useState<string>("");
  const { authorizedApps, allApps } = useApps();

  const appCards = (showUnauthorized ? allApps : authorizedApps).map((app) => (
    <AppCard
      key={app.app}
      hasAccess={authorizedApps.includes(app)}
      route={app.route}
      title={app.title}
      description={app.description}
    />
  ));

  return (
    <>
      <div className={styles.hjem}>
        <div className={styles.hjem__guidepanel}>
          <div className={styles.hjem__heading}>
            <Heading level="1" size="large" spacing>
              God dag, {userInfo.name}!
            </Heading>
          </div>
          <GuidePanel
            poster
            illustration={<img src={pengesekk} alt="pengesekk" />}
          >
            <Heading level="2" size="small" spacing>
              Informasjon om utbetalingsportalen
            </Heading>
            <BodyLong spacing>
              Utbetalingsportalen er en ny platform som på sikt skal overta
              funksjoner fra Økonomiportalen og Abetal i en ny og forbedret
              versjon.
            </BodyLong>
          </GuidePanel>
        </div>
        <Heading level="3" size="medium" spacing>
          Apper
        </Heading>
        <Switch
          value="show"
          checked={showUnauthorized === "show"}
          onChange={(e) =>
            setShowUnauthorized((x) => (x ? "" : e.target.value))
          }
        >
          Vis alle
        </Switch>
        <div className={styles.hjem__apps}>{appCards}</div>
      </div>
    </>
  );
};

export default Hjem;
