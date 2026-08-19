import type { ExternalLink } from "@domain/ExternalLink";

const OKONOMIPORTALEN_URLS: Record<string, string> = {
	"prod-gcp": "https://wasapp.adeo.no/oppdrag/portal/login.jsp",
	"dev-gcp:qx": "https://wasapp-qx.adeo.no/oppdrag/portal/login.jsp",
	"dev-gcp:q1": "https://wasapp-q1.adeo.no/oppdrag/portal/login.jsp",
};

function getOkonomiportalenUrl(
	naisClusterName: string,
	utbetalingsportalenEnvironment: string,
): string {
	const key =
		naisClusterName === "prod-gcp"
			? "prod-gcp"
			: `dev-gcp:${utbetalingsportalenEnvironment.toLowerCase() === "qx" ? "qx" : "q1"}`;

	return OKONOMIPORTALEN_URLS[key] ?? OKONOMIPORTALEN_URLS["dev-gcp:q1"];
}

export function getExternalLinks(
	naisClusterName: string,
	utbetalingsportalenEnvironment: string,
): ExternalLink[] {
	return [
		{
			id: "okonomiportalen",
			title: "Økonomiportalen",
			description: "Gamle Økonomiportalen",
			url: getOkonomiportalenUrl(
				naisClusterName,
				utbetalingsportalenEnvironment,
			),
		},
	];
}
