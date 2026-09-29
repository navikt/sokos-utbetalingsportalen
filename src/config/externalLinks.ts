import type { ExternalLink } from "@domain/ExternalLink";

type EnvironmentKey = "prod-gcp" | "dev-gcp:qx" | "dev-gcp:q1";

const OKONOMIPORTALEN_URLS: Partial<Record<EnvironmentKey, string>> = {
	"prod-gcp": "https://wasapp.adeo.no/oppdrag/portal/login.jsp",
	"dev-gcp:qx": "https://wasapp-qx.adeo.no/oppdrag/portal/login.jsp",
	"dev-gcp:q1": "https://wasapp-q1.adeo.no/oppdrag/portal/login.jsp",
};

const SPK_MOTTAK_ADMIN_URLS: Partial<Record<EnvironmentKey, string>> = {
	"prod-gcp": "https://sokos-spk-mottak-admin.intern.nav.no",
	"dev-gcp:q1": "https://sokos-spk-mottak-admin.intern.dev.nav.no",
};

function getEnvironmentKey(
	naisClusterName: string,
	utbetalingsportalenEnvironment: string,
): EnvironmentKey {
	return naisClusterName === "prod-gcp"
		? "prod-gcp"
		: utbetalingsportalenEnvironment.toLowerCase() === "qx"
			? "dev-gcp:qx"
			: "dev-gcp:q1";
}

export function getExternalLinks(
	naisClusterName: string,
	utbetalingsportalenEnvironment: string,
): ExternalLink[] {
	const environmentKey = getEnvironmentKey(
		naisClusterName,
		utbetalingsportalenEnvironment,
	);
	const externalLinks: ExternalLink[] = [];
	const okonomiportalenUrl = OKONOMIPORTALEN_URLS[environmentKey];

	if (okonomiportalenUrl !== undefined) {
		externalLinks.push({
			id: "okonomiportalen",
			title: "Økonomiportalen",
			description: "Gamle Økonomiportalen",
			url: okonomiportalenUrl,
		});
	}

	const spkMottakAdminUrl = SPK_MOTTAK_ADMIN_URLS[environmentKey];
	if (spkMottakAdminUrl !== undefined) {
		externalLinks.push({
			id: "spk-mottak-dashboard",
			title: "SPK Mottak Dashboard",
			description: "Administrering for rekjøring av jobber i sokos-spk-mottak",
			url: spkMottakAdminUrl,
		});
	}

	return externalLinks;
}
