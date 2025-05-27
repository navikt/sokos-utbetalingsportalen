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
      <div className={styles["appcard__title"]}>
        <Heading level="3" size="xsmall">
          {props.title}
        </Heading>
        <div className={styles["appcard__arrow"]}>
          <ChevronRightIcon title="Chevron ikon" />
        </div>
      </div>
      <div className={styles["appcard__description"]}>{props.description}</div>
    </a>
  ) : (
    <Tooltip content="Du har ikke tilgang til denne appen">
      <div className={`${styles["appcard"]} ${styles["appcard--disabled"]}`}>
        <div className={styles["appcard__title"]}>
          <Heading level="3" size="xsmall">
            {props.title}
          </Heading>
          <div className={styles["appcard__arrow"]}>
            <ChevronRightIcon title="Chevron ikon" />
          </div>
        </div>
        <div className={styles["appcard__description"]}>
          {props.description}
        </div>
      </div>
    </Tooltip>
  );
}
