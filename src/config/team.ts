export const TEAM = {
	PENGEFLYT: "pengeflyt",
	BEREGNING: "beregning",
	KOBRA: "kobra",
	SKATT_OG_TREKK: "skattogtrekk",
} as const;

export type Team = (typeof TEAM)[keyof typeof TEAM];
