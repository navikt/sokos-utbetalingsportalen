import { BodyLong, GuidePanel, Heading, Switch } from "@navikt/ds-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import pengesekk from "../../assets/images/pengesekk.svg";
import AppCard from "../components/appcard/AppCard";
import { UserData } from "../models/userData";
import styles from "./Hjem.module.css";
import useApper from "../hooks/useApper";

const Hjem = () => {
  const userInfo = useLoaderData() as UserData;
  const [showUnauthorized, setShowUnauthorized] = useState<string>("");
  const { apperMedTilgang, alleApper } = useApper();

  const appCards = (showUnauthorized ? alleApper : apperMedTilgang).map((app) => (
    <AppCard
      key={app.app}
      hasAccess={apperMedTilgang.includes(app)}
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
          <GuidePanel poster illustration={<img src={pengesekk} alt="pengesekk" />}>
            <Heading level="2" size="small" spacing>
              Informasjon om utbetalingsportalen
            </Heading>
            <BodyLong spacing>
              Utbetalingsportalen er en ny platform som på sikt skal overta funksjoner fra Økonomiportalen og Abetal i
              en ny og forbedret versjon.
            </BodyLong>
          </GuidePanel>
        </div>
        <Heading level="3" size="medium" spacing>
          Apper
        </Heading>
        <Switch
          value="vis"
          checked={showUnauthorized === "vis"}
          onChange={(e) => setShowUnauthorized((x) => (x ? "" : e.target.value))}
        >
          Vis alle
        </Switch>
        <div className={styles.hjem__apper}>{appCards}</div>
      </div>
    </>
  );
};

export default Hjem;
