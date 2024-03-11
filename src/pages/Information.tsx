import { BodyLong, BodyShort, Box, GuidePanel, Heading, Link, List, Tooltip } from "@navikt/ds-react";
import { useLoaderData } from "react-router-dom";
import { UserData } from "../models/userData";
import pengesekk from "../../assets/images/pengesekk.svg";
import styles from "./Information.module.css";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import { ROUTE_PATH } from "../models/routePath";
import { Link as ReactRouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAzureAdGroups } from "../auth/authentication";
import { AzureAdGroupNameId, AzureAdGroupNames, AzureAdGroupName } from "../auth/azureAdGroups";

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
            <List as="ul" size="small">
              <List.Item>
                <BodyShort>
                  <Link href="https://navno.sharepoint.com/sites/POutbetaling" target="_blank">
                    Les mer på Navet
                  </Link>
                </BodyShort>
              </List.Item>
            </List>
          </GuidePanel>
        </div>
        <Heading level="3" size="medium" spacing>
          Apper
        </Heading>
        <div className={styles.apper}>
          {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_KRP_READ) ? (
            <Link as={ReactRouterLink} to={ROUTE_PATH.SOKOS_UP_KRP} variant="neutral" href="#" underline={false}>
              <Box background="surface-alt-2-subtle" padding="6" shadow="medium" borderRadius="xlarge">
                <div className={styles.apperContent}>
                  <BodyShort weight="semibold">Kontoregister person kontosøk</BodyShort>
                  <ChevronRightIcon />
                </div>
              </Box>
            </Link>
          ) : (
            <Tooltip content="Du har ikke tilgang til denne appen">
              <Box
                background="surface-alt-2-subtle"
                padding="6"
                shadow="medium"
                borderRadius="xlarge"
                className={styles.disabled}
              >
                <div className={styles.apperContent}>
                  <BodyShort weight="semibold">Kontoregister person kontosøk</BodyShort>
                  <ChevronRightIcon />
                </div>
              </Box>
            </Tooltip>
          )}
          {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_OPPDRAGSINFO_READ) ? (
            <Link
              as={ReactRouterLink}
              to={ROUTE_PATH.SOKOS_UP_OPPDRAGSINFO}
              variant="neutral"
              underline={false}
              aria-disabled
            >
              <Box background="surface-alt-2-subtle" padding="6" shadow="medium" borderRadius="xlarge">
                <div className={styles.apperContent}>
                  <BodyShort weight="semibold">Oppdragsinfo</BodyShort>
                  <ChevronRightIcon />
                </div>
              </Box>
            </Link>
          ) : (
            <Tooltip content="Du har ikke tilgang til denne appen">
              <Box
                background="surface-alt-2-subtle"
                padding="6"
                shadow="medium"
                borderRadius="xlarge"
                className={styles.disabled}
              >
                <div className={styles.apperContent}>
                  <BodyShort weight="semibold">Oppdragsinfo</BodyShort>
                  <ChevronRightIcon />
                </div>
              </Box>
            </Tooltip>
          )}

          {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_ORS_READ) ? (
            <Link as={ReactRouterLink} to={ROUTE_PATH.SOKOS_UP_ORS} variant="neutral" underline={false}>
              <Box background="surface-alt-2-subtle" padding="6" shadow="medium" borderRadius="xlarge">
                <div className={styles.apperContent}>
                  <BodyShort weight="semibold">Oppslag i Reskontro Stønad</BodyShort>
                  <ChevronRightIcon />
                </div>
              </Box>
            </Link>
          ) : (
            <Tooltip content="Du har ikke tilgang til denne appen">
              <Box
                background="surface-alt-2-subtle"
                padding="6"
                shadow="medium"
                borderRadius="xlarge"
                className={styles.disabled}
              >
                <div className={styles.apperContent}>
                  <BodyShort weight="semibold">Oppslag i Reskontro Stønad</BodyShort>
                  <ChevronRightIcon />
                </div>
              </Box>
            </Tooltip>
          )}

          {hasAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_SKATTEKORT_READ) ? (
            <Link as={ReactRouterLink} to={ROUTE_PATH.SOKOS_UP_SKATTEKORT} variant="neutral" href="#" underline={false}>
              <Box background="surface-alt-2-subtle" padding="6" shadow="medium" borderRadius="xlarge">
                <div className={styles.apperContent}>
                  <BodyShort weight="semibold">Skattekort</BodyShort>
                  <ChevronRightIcon />
                </div>
              </Box>
            </Link>
          ) : (
            <Tooltip content="Du har ikke tilgang til denne appen">
              <Box
                background="surface-alt-2-subtle"
                padding="6"
                shadow="medium"
                borderRadius="xlarge"
                className={styles.disabled}
              >
                <div className={styles.apperContent}>
                  <BodyShort weight="semibold">Skattekort</BodyShort>
                  <ChevronRightIcon />
                </div>
              </Box>
            </Tooltip>
          )}
        </div>
      </div>
    </>
  );
};

export default Information;
