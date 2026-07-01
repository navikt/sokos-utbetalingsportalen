import { Button } from "@navikt/ds-react";
import { useCallback } from "react";

interface GoBackProps {
	fallbackUrl?: string;
	children: React.ReactNode;
}

export default function GoBack({ fallbackUrl = "/", children }: GoBackProps) {
	const handleGoBack = useCallback(() => {
		if (window.history.length > 2) {
			window.history.back();
		} else {
			window.location.href = fallbackUrl;
		}
	}, [fallbackUrl]);

	return (
		<Button variant="tertiary" onClick={handleGoBack}>
			{children}
		</Button>
	);
}
