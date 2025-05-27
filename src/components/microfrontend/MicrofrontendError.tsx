import {
  BodyShort,
  Box,
  Button,
  Heading,
  Link,
  List,
  VStack,
} from "@navikt/ds-react";
import styles from "../../common-styles.module.css";

export function MicrofrontendError() {
  return (
    <Box paddingBlock="20 8">
      <div className={styles["error-page"]}>
        <VStack gap="16">
          <VStack gap="12" align="start">
            <div>
              <Heading level="1" size="large" spacing>
                Beklager, noe gikk galt.
              </Heading>
              <BodyShort spacing>
                En teknisk feil gjør at siden er utilgjengelig.
              </BodyShort>
              <BodyShort>Du kan prøve å</BodyShort>
              <List>
                <List.Item>
                  vente noen minutter og{" "}
                  <Link href="#" onClick={() => location.reload()}>
                    laste siden på nytt
                  </Link>
                </List.Item>
                <List.Item>
                  {window.history.length > 1 && (
                    <Link href="#" onClick={() => history.back()}>
                      gå tilbake til forrige side
                    </Link>
                  )}
                </List.Item>
              </List>
              <Button as="a" href="/">
                Gå til hovedsiden
              </Button>
            </div>
          </VStack>
        </VStack>
      </div>
    </Box>
  );
}
