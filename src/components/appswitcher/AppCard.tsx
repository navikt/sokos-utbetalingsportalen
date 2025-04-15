import { ChevronRightIcon } from "@navikt/aksel-icons";
import { Heading, Tooltip } from "@navikt/ds-react";
import styles from "./AppCard.module.css";

type AppCardProps = {
  hasAccess: boolean;
  title: string;
  description: string;
  route: string;
};

export default function AppCard(props: AppCardProps) {
  return props.hasAccess ? (
    <a href={props.route} className={styles["appcard"]}>
      <div className={styles["appcard_title"]}>
        <Heading level="3" size="xsmall">
          {props.title}
        </Heading>
        <div className={styles["appcard-arrow"]}>
          <ChevronRightIcon title="Chevron ikon" />
        </div>
      </div>
      <div className={styles["appcard-description"]}>{props.description}</div>
    </a>
  ) : (
    <Tooltip content="Du har ikke tilgang til denne appen">
      <div className={`${styles["appcard"]} ${styles["disabled"]}`}>
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
    </Tooltip>
  );
}
