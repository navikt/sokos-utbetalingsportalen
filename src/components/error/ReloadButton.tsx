import { Button } from "@navikt/ds-react";

export function ReloadButton() {
	return (
		<Button variant="secondary" size="small" onClick={() => location.reload()}>
			Last siden på nytt
		</Button>
	);
}
