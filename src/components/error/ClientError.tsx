import { BodyShort, Box, Button, Heading, HStack } from "@navikt/ds-react";
import styles from "../../common-styles.module.css";

export function ClientError() {
	return (
		<Box paddingBlock="20 8">
			<div className={styles["error-page"]}>
				<Heading level="1" size="large" spacing>
					Beklager, noe gikk galt.
				</Heading>
				<BodyShort spacing>
					En teknisk feil gjør at siden er utilgjengelig. Du kan prøve å vente
					noen minutter og prøve igjen.
				</BodyShort>
				<HStack gap="3" wrap={false}>
					<Button
						variant="secondary"
						size="small"
						onClick={() => location.reload()}
					>
						Last siden på nytt
					</Button>
					{window.history.length > 1 && (
						<Button
							variant="tertiary"
							size="small"
							onClick={() => history.back()}
						>
							Gå tilbake
						</Button>
					)}
				</HStack>
				<Button as="a" href="/" style={{ marginTop: "var(--a-spacing-6)" }}>
					Gå til hovedsiden
				</Button>
			</div>
		</Box>
	);
}
