import GoBack from "@components/go-back/GoBack";
import { BodyShort, Box, Button, Heading, List } from "@navikt/ds-react";
import styles from "../../common-styles.module.css";

export function MicrofrontendError() {
  return (
    <Box paddingBlock="20 16" data-aksel-template="404-v2">
      <div className={styles["error-page"]}>
        <Heading level="1" size="large" spacing>
          Beklager, noe gikk galt
        </Heading>
        <BodyShort>En teknisk feil gjør at siden er utilgjengelig.</BodyShort>
        <List>
          <List.Item>Du kan prøve å</List.Item>
          <List.Item>
            <GoBack fallbackUrl="/">Gå tilbake til forrige side</GoBack>
          </List.Item>
        </List>
        <Button as="a" href="/">
          Gå til hovedsiden
        </Button>
      </div>
    </Box>
  );
}
