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

export function ClientError() {
	return (
		<Box paddingBlock="space-80 space-64">
			<div className={styles["error-page"]}>
				<VStack gap="space-16" align="start">
					<Heading level="1" size="large">
						Beklager, noe gikk galt.
					</Heading>
					<BodyShort>En teknisk feil gjør at siden er utilgjengelig.</BodyShort>
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
				</VStack>
			</div>
		</Box>
	);
}
