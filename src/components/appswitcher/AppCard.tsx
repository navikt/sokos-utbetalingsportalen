import { LinkCard, Tooltip } from "@navikt/ds-react";
import styles from "./AppCard.module.css";

type AppCardProps = {
  hasAccess: boolean;
  title: string;
  description: string;
  route: string;
};

export default function AppCard(props: AppCardProps) {
  return props.hasAccess ? (
    <LinkCard className={styles.appcard}>
      <LinkCard.Title as="h3">
        <LinkCard.Anchor href={props.route}>{props.title}</LinkCard.Anchor>
      </LinkCard.Title>
      <LinkCard.Description>{props.description}</LinkCard.Description>
    </LinkCard>
  ) : (
    <Tooltip content="Du har ikke tilgang til denne appen">
      <LinkCard className={`${styles.appcard} ${styles["appcard--disabled"]}`}>
        <LinkCard.Title as="h3">
          <span>{props.title}</span>
        </LinkCard.Title>
        <LinkCard.Description>{props.description}</LinkCard.Description>
      </LinkCard>
    </Tooltip>
  );
}
