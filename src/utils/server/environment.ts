const isDevelopment = process.env.NAIS_CLUSTER_NAME === "dev-gcp";
const isProduction = process.env.NAIS_CLUSTER_NAME === "prod-gcp";

type Environment = "production" | "development" | "local";

export function getServerSideEnvironment(): Environment {
	if (isDevelopment) {
		return "development";
	}

	if (isProduction) {
		return "production";
	}

	return "local";
}

export function isLocalAuthProxyEnabled(): boolean {
	return (
		!process.env.NAIS_CLUSTER_NAME &&
		process.env.LOCAL_AUTH_PROXY_ENABLED === "true"
	);
}
