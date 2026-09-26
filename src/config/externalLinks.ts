import type { ExternalLink } from "@domain/ExternalLink";

const OKONOMIPORTALEN_URLS: Record<string, string> = {
	"prod-gcp": "https://wasapp.adeo.no/oppdrag/portal/login.jsp",
	"dev-gcp:qx": "https://wasapp-qx.adeo.no/oppdrag/portal/login.jsp",
	"dev-gcp:q1": "https://wasapp-q1.adeo.no/oppdrag/portal/login.jsp",
};

const SPK_MOTTAK_ADMIN_URLS: Record<string, string> = {
	"prod-gcp": "https://sokos-spk-mottak-admin.intern.nav.no",
	"dev-gcp:qx": "https://sokos-spk-mottak-admin-qx.intern.dev.nav.no",
	"dev-gcp:q1": "https://sokos-spk-mottak-admin.intern.dev.nav.no",
};

function getEnvironmentKey(
	naisClusterName: string,
	utbetalingsportalenEnvironment: string,
): string {
	return naisClusterName === "prod-gcp"
		? "prod-gcp"
		: `dev-gcp:${utbetalingsportalenEnvironment.toLowerCase() === "qx" ? "qx" : "q1"}`;
}

function getOkonomiportalenUrl(
	naisClusterName: string,
	utbetalingsportalenEnvironment: string,
): string {
	const key = getEnvironmentKey(naisClusterName, utbetalingsportalenEnvironment);

	return OKONOMIPORTALEN_URLS[key] ?? OKONOMIPORTALEN_URLS["dev-gcp:q1"];
}

function getSpkMottakAdminUrl(
	naisClusterName: string,
	utbetalingsportalenEnvironment: string,
): string {
	const key = getEnvironmentKey(naisClusterName, utbetalingsportalenEnvironment);

	return SPK_MOTTAK_ADMIN_URLS[key] ?? SPK_MOTTAK_ADMIN_URLS["dev-gcp:q1"];
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
		{
			id: "spk-mottak-dashboard",
			title: "SPK Mottak Dashboard",
			description: "Administrering for rekjøring av jobber i sokos-spk-mottak",
			url: getSpkMottakAdminUrl(
				naisClusterName,
				utbetalingsportalenEnvironment,
			),
		},
	];
}
