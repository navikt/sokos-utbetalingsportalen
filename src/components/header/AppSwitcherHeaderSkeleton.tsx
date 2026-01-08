import { InternalHeader, Loader } from "@navikt/ds-react";

export default function AppSwitcherHeaderSkeleton() {
	return (
		<InternalHeader.Button>
			<Loader variant="inverted" />
		</InternalHeader.Button>
	);
}
