import { Heading, Skeleton, Switch } from "@navikt/ds-react";
import appSwitcherStyles from "../appswitcher/AppSwitcher.module.css";
import styles from "./AppSwitcherSkeleton.module.css";

export default function AppSwitcherSkeleton() {
  return (
    <>
      <Heading level="3" size="medium" spacing>
        Apper
      </Heading>
      <Switch loading>Vis alle</Switch>
      <div className={appSwitcherStyles.homeApps}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className={styles.appCardSkeleton}>
            <div className={styles.titleWrapper}>
              <Skeleton variant="text" width="60%" height="24px" />
              <Skeleton variant="rectangle" width="16px" height="16px" />
            </div>
            <div className={styles.descriptionWrapper}>
              <Skeleton variant="text" width="90%" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
