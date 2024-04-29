import { BodyLong, GuidePanel, Heading, Switch } from "@navikt/ds-react";
import { useLoaderData } from "react-router-dom";
import { UserData } from "../models/userData";
import pengesekk from "../../assets/images/pengesekk.svg";
import styles from "./Hjem.module.css";
import { ROUTE_PATH } from "../models/routePath";
import { useEffect, useState } from "react";
import { getAzureAdGroups } from "../auth/authentication";
import { AzureAdGroupName, AzureAdGroupNameId, AzureAdGroupNames } from "../auth/azureAdGroups";
import AppCard from "../components/appcard/AppCard";

const Information = () => {
  const userInfo = useLoaderData() as UserData;
  const [groups, setGroups] = useState<Array<string>>([]);
  const [showUnauthorized, setShowUnauthorized] = useState<string>("");

  useEffect(() => {
    getAzureAdGroups()
      .then((adGroups) => setGroups(adGroups))
      .catch((error) => {
        throw new Error("Failed to load Azure AD groups:", error);
      });
  }, []);
  const hasAccess = (group: AzureAdGroupNames) => groups.some((id) => id === AzureAdGroupNameId[group]);

  const apps = [
    {
      group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_KRP_READ,
      route: ROUTE_PATH.SOKOS_UP_KRP,
      title: "Kontoregister person kontosøk",
      description: "Søk etter personer og konti",
    },
    {
      group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ,
      route: ROUTE_PATH.SOKOS_UP_OPPDRAGSINFO,
      title: "Oppdragsinfo",
      description: "Søk etter oppdrag i Oppdragssystemet",
    },
    {
      group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ORS_READ,
      route: ROUTE_PATH.SOKOS_UP_ORS,
      title: "Oppslag i Reskontro Stønad",
      description: "Søk etter posteringer fra Abetal og UR",
    },
    {
      group: AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ,
      route: ROUTE_PATH.SOKOS_UP_SKATTEKORT,
      title: "Skattekort",
      description: "Søk etter skattekort for personer i OS-Eskatt",
    },
  ]
    .filter((f) => hasAccess(f.group) || showUnauthorized)
    .map((f) => <AppCard hasAccess={hasAccess(f.group)} route={f.route} title={f.title} description={f.description} />);

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
        <Heading level="3" size="medium" spacing className="justify-start">
          Apper
        </Heading>
        <Switch
          value="vis"
          checked={showUnauthorized === "vis"}
          onChange={(e) => setShowUnauthorized((x) => (x ? "" : e.target.value))}
        >
          Vis alle
        </Switch>
        <div className={styles.hjem__apper}>{apps}</div>
      </div>
    </>
  );
};

export default Information;
