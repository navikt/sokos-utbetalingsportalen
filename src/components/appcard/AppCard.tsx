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

const AppCard: React.FC<AppCardProps> = ({
  hasAccess,
  route,
  title,
  description,
}) => {
  const content = (
    <div>
      <div className={styles.appcard__title}>
        <Heading level="3" size="xsmall">
          {title}
        </Heading>
        <div className={styles.appcard__arrow}>
          <ChevronRightIcon />
        </div>
      </div>
      <div className={styles.appcard__description}>{description}</div>
    </div>
  );

  if (hasAccess) {
    return (
      <ReactRouterLink className={styles.appcard} to={route}>
        {content}
      </ReactRouterLink>
    );
  } else {
    return (
      <span className={`${styles.appcard} ${styles.disabled}`}>
        <Tooltip content="Du har ikke tilgang til denne appen">
          {content}
        </Tooltip>
      </span>
    );
  }
};

export default AppCard;
