import React from "react";
import { Box, BodyShort, Tooltip, Link } from "@navikt/ds-react";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import { Link as ReactRouterLink } from "react-router-dom";
import styles from "./AppCard.module.css";

interface AppCardProps {
  hasAccess: boolean;
  route: string;
  title: string;
}

const AppCard: React.FC<AppCardProps> = ({ hasAccess, route, title }) => {
  if (hasAccess) {
    return (
      <Link as={ReactRouterLink} to={route} variant="neutral" underline={false} className={styles.card}>
        <Box background="surface-alt-2-subtle" padding="6" shadow="medium" borderRadius="xlarge">
          <div className={styles.apperContent}>
            <BodyShort weight="semibold">{title}</BodyShort>
            <ChevronRightIcon />
          </div>
        </Box>
      </Link>
    );
  } else {
    return (
      <Link as="span" variant="neutral" underline={false} className={styles.card}>
        <Tooltip content="Du har ikke tilgang til denne appen">
          <Box
            background="surface-alt-2-subtle"
            padding="6"
            shadow="medium"
            borderRadius="xlarge"
            className={styles.disabled}
            aria-disabled
          >
            <div className={styles.apperContent}>
              <BodyShort weight="semibold">{title}</BodyShort>
              <ChevronRightIcon />
            </div>
          </Box>
        </Tooltip>
      </Link>
    );
  }
};

export default AppCard;
