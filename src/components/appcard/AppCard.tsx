import React from "react";
import { Tooltip, Heading } from "@navikt/ds-react";
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
      <ReactRouterLink to={route}>
        <div className={styles.appcard__box}>
          <div className={styles.appcard__title}>
            <Heading level="3" size="xsmall">
              {title}
            </Heading>
            <ChevronRightIcon />
          </div>
          <div className={styles.appcard__description}>{description}</div>
        </div>
      </ReactRouterLink>
    );
  } else {
    return (
      <ReactRouterLink as="span">
        <div className={`${styles.appcard__box} ${styles.disabled}`}>
          <Tooltip content="Du har ikke tilgang til denne appen">
            <div>
              <div className={styles.appcard__title}>
                <Heading level="3" size="xsmall">
                  {title}
                </Heading>
                <ChevronRightIcon />
              </div>
              <div className={styles.appcard__description}>{description}</div>
            </div>
          </Tooltip>
        </div>
      </ReactRouterLink>
    );
  }
};

export default AppCard;
