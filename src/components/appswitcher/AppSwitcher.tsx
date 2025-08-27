import { Heading, LinkCard, Switch, Tooltip } from "@navikt/ds-react";
import { getAuthorizedApps, getEnvironmentFilteredApps, hasAccessToApp } from "@utils/accessControl";
import { useState } from "react";
import { microfrontendConfigArray as allApps } from "src/microfrontend";
import styles from "./AppSwitcher.module.css";
import linkCardStyles from "./LinkCard.module.css";

type AppSwitcherProps = {
  adGroups: string[];
};

export default function AppSwitcher(props: AppSwitcherProps) {
  const authorizedApps = getAuthorizedApps(props.adGroups);
  const environmentFilteredApps = getEnvironmentFilteredApps();
  const [showApps, setShowApps] = useState<string>("");

  function appCards() {
    return (showApps ? environmentFilteredApps : authorizedApps)
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((app) => {
        const hasAccess = hasAccessToApp(props.adGroups, app);

        return hasAccess ? (
          <LinkCard key={app.app} className={linkCardStyles.linkCard}>
            <LinkCard.Title as="h3">
              <LinkCard.Anchor href={app.route}>{app.title}</LinkCard.Anchor>
            </LinkCard.Title>
            <LinkCard.Description>{app.description}</LinkCard.Description>
          </LinkCard>
        ) : (
          <Tooltip key={app.app} content="Du har ikke tilgang til denne appen">
            <LinkCard
              className={`${linkCardStyles.linkCard} ${linkCardStyles["linkCard--disabled"]}`}
            >
              <LinkCard.Title as="h3">
                <span>{app.title}</span>
              </LinkCard.Title>
              <LinkCard.Description>{app.description}</LinkCard.Description>
            </LinkCard>
          </Tooltip>
        );
      });
  }

  return (
    <>
      <Heading level="3" size="medium" spacing>
        Apper
      </Heading>
      <Switch
        value="show"
        checked={showApps === "show"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setShowApps((value: string) => (value ? "" : e.target.value))
        }
      >
        Vis alle
      </Switch>
      <div className={styles.linkCardGrid}>{appCards()}</div>
    </>
  );
}