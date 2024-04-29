import { BodyLong, GuidePanel, Heading } from "@navikt/ds-react";
import { useLoaderData } from "react-router-dom";
import { UserData } from "../models/userData";
import pengesekk from "../../assets/images/pengesekk.svg";
import styles from "./Hjem.module.css";
import { ROUTE_PATH } from "../models/routePath";
import { useEffect, useState } from "react";
import { getAzureAdGroups } from "../auth/authentication";
import { AzureAdGroupNameId, AzureAdGroupNames, AzureAdGroupName } from "../auth/azureAdGroups";
import AppCard from "../components/appcard/AppCard";

const Information = () => {
  const userInfo = useLoaderData() as UserData;
  const [groups, setGroups] = useState<Array<string>>([]);

  useEffect(() => {
    getAzureAdGroups()
      .then((adGroups) => setGroups(adGroups))
      .catch((error) => {
        throw new Error("Failed to load Azure AD groups:", error);
      });
  }, []);
  const hasAccess = (group: AzureAdGroupNames) => groups.some((id) => id === AzureAdGroupNameId[group]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.guidepanel}>
          <div className={styles.heading}>
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
        <div className={styles.apper}>
          <AppCard
            hasAccess={hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_KRP_READ)}
            route={ROUTE_PATH.SOKOS_UP_KRP}
            title="Kontoregister person kontosøk"
            description="Søk etter personer og konti"
          />

          <AppCard
            hasAccess={hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ)}
            route={ROUTE_PATH.SOKOS_UP_OPPDRAGSINFO}
            title="Oppdragsinfo"
            description="Søk etter oppdrag i Oppdragssystemet"
          />
          <AppCard
            hasAccess={hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ORS_READ)}
            route={ROUTE_PATH.SOKOS_UP_ORS}
            title="Oppslag i Reskontro Stønad"
            description="Søk etter posteringer fra Abetal og UR"
          />

          <AppCard
            hasAccess={hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ)}
            route={ROUTE_PATH.SOKOS_UP_SKATTEKORT}
            title="Skattekort"
            description="Søk etter skattekort for personer i OS-Eskatt"
          />
        </div>
      </div>
    </>
  );
};

export default Information;
