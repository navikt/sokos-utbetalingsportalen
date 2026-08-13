import { ClientError } from "@components/error/ClientError";
import ContentLoader from "@components/loader/ContentLoader";
import { ApmErrorBoundary } from "@nais/apm/react";
import React, { useMemo } from "react";

type MicrofrontendType = {
	url: string;
	"client:only"?: string;
};

function createMicrofrontendBundle(url: string) {
	return React.lazy(() => import(/* @vite-ignore */ url));
}

export default function Microfrontend(props: MicrofrontendType) {
	const MicrofrontendBundle = useMemo(
		() => createMicrofrontendBundle(props.url),
		[props.url],
	);

	return (
		<React.Suspense fallback={<ContentLoader />}>
			<ApmErrorBoundary fallback={<ClientError />}>
				<MicrofrontendBundle />
			</ApmErrorBoundary>
		</React.Suspense>
	);
}
