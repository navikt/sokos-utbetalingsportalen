import { ClientError } from "@components/error/ClientError";
import ContentLoader from "@components/loader/ContentLoader";
import { FaroErrorBoundary } from "@grafana/faro-react";
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
			<FaroErrorBoundary fallback={<ClientError />}>
				<MicrofrontendBundle />
			</FaroErrorBoundary>
		</React.Suspense>
	);
}
