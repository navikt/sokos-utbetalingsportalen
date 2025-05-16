import { Heading, Switch } from "@navikt/ds-react";
import { useState } from "react";
import { microfrontendConfigArray as allApps } from "src/microfrontend";
import { getAuthorizedApps, hasAccessToApp } from "src/utils/accessControl";
import AppCard from "./AppCard";
import styles from "./AppSwitcher.module.css";

type AppSwitcherProps = {
  adGroups: string[];
};

export default function AppSwitcher(props: AppSwitcherProps) {
  const authorizedApps = getAuthorizedApps(props.adGroups);
  const [showApps, setShowApps] = useState<string>("");

  function appCards() {
    return (showApps ? allApps : authorizedApps)
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((app) => (
        <AppCard
          key={app.app}
          hasAccess={hasAccessToApp(props.adGroups, app)}
          route={app.route}
          title={app.title}
          description={app.description}
        />
      ));
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
      <div className={styles.homeApps}>{appCards()}</div>
    </>
  );
}
