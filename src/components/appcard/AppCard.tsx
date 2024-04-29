import React from "react";
import { Heading, Tooltip } from "@navikt/ds-react";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import { Link as ReactRouterLink } from "react-router-dom";
import styles from "./AppCard.module.css";

interface AppCardProps {
  hasAccess: boolean;
  route: string;
  title: string;
  description: string;
}

const AppCard: React.FC<AppCardProps> = ({ hasAccess, route, title, description }) => {
  if (hasAccess) {
    return (
      <ReactRouterLink className={styles.appcard} to={route}>
        <div className={styles.appcard__title}>
          <Heading level="3" size="xsmall">
            {title}
          </Heading>
          <div className={styles.appcard__right}>
            <ChevronRightIcon />
          </div>
        </div>
        <div className={styles.appcard__description}>{description}</div>
      </ReactRouterLink>
    );
  } else {
    return (
      <span className={`${styles.appcard} ${styles.disabled}`}>
        <Tooltip content="Du har ikke tilgang til denne appen">
          <div>
            <div className={styles.appcard__title}>
              <Heading level="3" size="xsmall">
                {title}
              </Heading>
              <div className={styles.appcard__right}>
                <ChevronRightIcon />
              </div>
            </div>
            <div className={styles.appcard__description}>{description}</div>
          </div>
        </Tooltip>
      </span>
    );
  }
};

export default AppCard;
