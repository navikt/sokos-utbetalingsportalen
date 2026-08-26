/**
 * Delt kilde for den syntetiske lokale testbrukeren. Brukes av både
 * `mock/auth/localDevUser.ts` (auth-bypass i `pnpm dev`) og
 * `mock/auth/generate-oauth-config.ts` (genererer `oauth-config.json` for
 * mock-oauth2-server i `pnpm dev:mock`), slik at de to lokale
 * innloggingsmodusene alltid gir identisk tilgang.
 */
export const LOCAL_DEV_NAME = "Ola Mohammed";
export const LOCAL_DEV_NAVIDENT = "Z123456";

export const LOCAL_DEV_GROUPS: string[] = [
	"0e58dc41-7c57-4b79-a8c7-d0caec129e53",
	"a13b4176-e328-4e1c-b181-ff676a7146b1",
	"b01fb216-fcb3-4ede-b7da-71fffe859763",
	"98146b9a-1891-44e3-9b61-92130c2fcd8b",
	"e0023d91-26bc-4d5d-95ba-3148b6123afc",
	"391bec9e-e71e-42cb-a030-56c394dd13fd",
	"bdcedce3-dab5-4b68-b1d3-8625cd0d3b55",
	"138d21fb-4e96-46d6-91e4-e3926aa349e5",
	"9c5b24f2-5e01-4966-adaf-bc9fb6410a32",
	"3bc37bf2-8e76-407c-ad4a-d2c79edc241e",
	"2020a765-ffae-4042-b4cc-2a5a783a3ec5",
	"f4bcf57f-4f44-49b6-bffa-0b249fd35591",
	"573f2934-940e-48ee-a4e5-cf7e28075f70",
	"f760594e-4918-4246-a636-329148c82fa7",
	"2477057d-7f80-4517-a885-20c948bf0367",
	"c1c0f5d7-cdaa-4011-b4f6-b3815a7432e5",
	"0de8d01f-8ad0-4391-841c-55392956bc17",
	"c9b8da69-652a-4d54-adeb-ca4ec73fa99b",
];
