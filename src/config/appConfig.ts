export type App = {
	app: string;
	title: string;
	description: string;
	adGroupDevelopment: string;
	adGroupProduction: string;
	route: string;
	naisAppName: string;
};

type AppDictionary = Record<string, App>;

export const PLACEHOLDER_AD_GROUP = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";

export const apps: App[] = [
	{
		app: "DARE",
		title: "DARE POC",
		description: "Utkast av beregning av AAP",
		adGroupDevelopment: "2477057d-7f80-4517-a885-20c948bf0367",
		adGroupProduction: PLACEHOLDER_AD_GROUP,
		route: "/dare",
		naisAppName: "sokos-up-dare",
	},
	{
		app: "ATTESTASJON",
		title: "Attestasjon",
		description: "Attestering av oppdrag",
		adGroupDevelopment: "0de8d01f-8ad0-4391-841c-55392956bc17",
		adGroupProduction: "b37d0866-fae3-43c7-abd4-91cf485852c5",
		route: "/attestasjon",
		naisAppName: "sokos-up-attestasjon",
	},
	{
		app: "OPPDRAGSINFO",
		title: "Oppdragsinfo",
		description: "Søk etter oppdrag i Oppdragssystemet",
		adGroupDevelopment: "e0023d91-26bc-4d5d-95ba-3148b6123afc",
		adGroupProduction: "f3d2cfe1-f437-412f-9165-075cb3d27a58",
		route: "/oppdragsinfo",
		naisAppName: "sokos-up-oppdragsinfo",
	},
	{
		app: "FASTEDATA",
		title: "Faste data",
		description: "Oppslag og oversikt over gjeldende oppsettsregler",
		adGroupDevelopment: "7e0c2ad1-d0e7-4fa8-8169-7a9d68435644",
		adGroupProduction: PLACEHOLDER_AD_GROUP,
		route: "/fastedata",
		naisAppName: "sokos-up-fastedata",
	},
	{
		app: "SKATTEKORT-SSR",
		title: "Skattekort-ssr",
		description: "Test for astro ssr",
		adGroupDevelopment: "62e34335-63b3-420a-8978-62d48d218c19",
		adGroupProduction: PLACEHOLDER_AD_GROUP,
		route: "/skattekort-ssr",
		naisAppName: "sokos-up-skattekort-ssr",
	},
	{
		app: "SPK-MOTTAK",
		title: "SPK mottak",
		description: "Dashboard for å trigge jobber",
		adGroupDevelopment: "0e58dc41-7c57-4b79-a8c7-d0caec129e53",
		adGroupProduction: "f49b797d-600d-46da-8061-7746e48d1aca",
		route: "/spk-mottak",
		naisAppName: "sokos-up-spk-mottak",
	},
	{
		app: "RESENDING-BANK",
		title: "Resending til bank",
		description: "Resending av meldinger til bank",
		adGroupDevelopment: "391bec9e-e71e-42cb-a030-56c394dd13fd",
		adGroupProduction: "072fb5d2-1cf5-4af2-8ce1-2a2585b9f0ce",
		route: "/resending-bank",
		naisAppName: "sokos-up-resending-bank",
	},
	{
		app: "KRP",
		title: "Kontoregister person",
		description: "Oppslag og registrering av konti til personer",
		adGroupDevelopment: "98146b9a-1891-44e3-9b61-92130c2fcd8b",
		adGroupProduction: "bb9c7baf-768b-4e84-816c-f10d0a6c7d25",
		route: "/kontoregister-person",
		naisAppName: "sokos-up-krp",
	},
	{
		app: "KRO",
		title: "Kontoregister organisasjon",
		description: "Oppslag og registrering av konti til organisasjoner",
		adGroupDevelopment: "bdcedce3-dab5-4b68-b1d3-8625cd0d3b55",
		adGroupProduction: "e1635067-dfc9-4fb8-8405-d50e9672cf5c",
		route: "/kontoregister-organisasjon",
		naisAppName: "sokos-up-kro",
	},
	{
		app: "ORS",
		title: "Oppslag i Reskontro Stønad",
		description: "Søk etter posteringer fra Abetal og UR",
		adGroupDevelopment: "b01fb216-fcb3-4ede-b7da-71fffe859763",
		adGroupProduction: "40ee7ce5-7ec8-405e-b2ea-951401c2633e",
		route: "/oppslag-reskontro-stoenad",
		naisAppName: "sokos-up-ors",
	},
	{
		app: "UTBETALING",
		title: "Utbetaling",
		description: "Søk etter utbetalinger",
		adGroupDevelopment: "138d21fb-4e96-46d6-91e4-e3926aa349e5",
		adGroupProduction: "f8919276-46bf-43a2-a9cb-9a5c5f9c8e16",
		route: "/utbetaling",
		naisAppName: "sokos-up-utbetaling",
	},
	{
		app: "BUNTKONTROLL",
		title: "Buntkontroll",
		description: "Oversikt over bunter sendt til bank",
		adGroupDevelopment: "3bc37bf2-8e76-407c-ad4a-d2c79edc241e",
		adGroupProduction: "3309383f-4b8f-4778-99c1-311dc75bc482",
		route: "/buntkontroll",
		naisAppName: "sokos-up-buntkontroll",
	},
	{
		app: "MELDINGSFLYT",
		title: "Meldingsflyt",
		description: "Oversikt over meldinger til og fra bank",
		adGroupDevelopment: "2020a765-ffae-4042-b4cc-2a5a783a3ec5",
		adGroupProduction: "ad41e055-af0c-4a26-a31c-c51d6ea236cd",
		route: "/meldingsflyt",
		naisAppName: "sokos-up-meldingsflyt",
	},
	{
		app: "RETUR-FRA-BANK",
		title: "Retur fra bank",
		description: "Oversikt over returer fra bank",
		adGroupDevelopment: "c9b8da69-652a-4d54-adeb-ca4ec73fa99b",
		adGroupProduction: "d192b937-5da1-46f5-b460-a3a5a2a63712",
		route: "/retur-fra-bank",
		naisAppName: "sokos-up-retur-fra-bank",
	},
	{
		app: "OPPGJORSRAPPORTER",
		title: "Oppgjørsrapporter",
		description: "Oversikt over Oppgjørsrapporter",
		adGroupDevelopment: "9c5b24f2-5e01-4966-adaf-bc9fb6410a32",
		adGroupProduction: PLACEHOLDER_AD_GROUP,
		route: "/oppgjorsrapporter",
		naisAppName: "sokos-up-oppgjorsrapporter",
	},
	{
		app: "RAY-RAY-ADMIN",
		title: "Ray-ray administrasjon",
		description: "Administrasjonsflate for Ray-Ray",
		adGroupDevelopment: "c1c0f5d7-cdaa-4011-b4f6-b3815a7432e5",
		adGroupProduction: PLACEHOLDER_AD_GROUP,
		route: "/ray-ray-admin",
		naisAppName: "sokos-up-ray-ray-admin",
	},
];

/**
 * Creates a dictionary of page configurations indexed by lowercase app name
 * @param pages Array of page configurations
 * @returns Dictionary with page configs accessible by lowercase app name
 */
function createAppConfig(pages: App[]): AppDictionary {
	return Object.fromEntries(
		pages.map((page) => [page.app.toLowerCase(), page]),
	) as AppDictionary;
}

/**
 * Dictionary of page configurations, accessible by lowercase app name
 * Example: pagesConfig.attestasjon
 */
const appConfig: AppDictionary = createAppConfig(apps);

/**
 * Gets a page configuration by app name (case insensitive)
 * @param appName The name of the app to get config for
 * @returns The page configuration
 */
export function getAppConfig(appName: string): App {
	return appConfig[appName.toLowerCase()];
}
