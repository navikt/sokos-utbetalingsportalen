import { Link as ReactRouterLink } from "react-router-dom";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import { Heading, Tooltip } from "@navikt/ds-react";
import styles from "./AppCard.module.css";

interface AppCardProps {
  hasAccess: boolean;
  route: string;
  title: string;
  description: string;
}

export default function AppCard(props: AppCardProps) {
  const content = (
    <div>
      <div className={styles["appcard_title"]}>
        <Heading level="3" size="xsmall">
          {props.title}
        </Heading>
        <div className={styles["appcard-arrow"]}>
          <ChevronRightIcon title="Chevron ikon" />
        </div>
      </div>
      <div className={styles["appcard-description"]}>{props.description}</div>
    </div>
  );

  if (props.hasAccess) {
    return (
      <ReactRouterLink className={styles["appcard"]} to={props.route}>
        {content}
      </ReactRouterLink>
    );
  } else {
    return (
      <span className={`${styles["appcard"]} ${styles["disabled"]}`}>
        <Tooltip content="Du har ikke tilgang til denne appen">
          {content}
        </Tooltip>
      </span>
    );
  }
}
