import { ClientError } from "@components/error/ClientError";
import ContentLoader from "@components/loader/ContentLoader";
import { ApmErrorBoundary } from "@nais/apm/react";
import React, { useMemo } from "react";

type MicrofrontendProps = {
	url: string;
	microfrontendName: string;
	"client:only"?: string;
};

function createMicrofrontendBundle(url: string) {
	return React.lazy(() => import(/* @vite-ignore */ url));
}

export default function Microfrontend(props: MicrofrontendProps) {
	const MicrofrontendBundle = useMemo(
		() => createMicrofrontendBundle(props.url),
		[props.url],
	);

	return (
		<React.Suspense fallback={<ContentLoader />}>
			<ApmErrorBoundary
				fallback={<ClientError />}
				context={{ microfrontend: props.microfrontendName }}
			>
				<MicrofrontendBundle />
			</ApmErrorBoundary>
		</React.Suspense>
	);
}
