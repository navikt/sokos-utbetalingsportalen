import type { UserData } from "../../src/types/UserData";
import { MOCK_USER_GROUPS } from "./adGroups";

const MOCK_USER_NAME = "Ola Mohammed";
const MOCK_USER_NAVIDENT = "Z123456";

/**
 * Syntetisk bruker brukt kun når `pnpm dev` kjøres uten
 * LOCAL_AUTH_PROXY_ENABLED (dvs. uten mock-oauth2-server/Wonderwall). Gir
 * rask lokal utvikling uten å måtte logge inn. Samme identitet som
 * mock-oauth2-server sin `mock/auth/mock-oauth-config.json` (se
 * `generate-oauth-config.ts`, som gjenbruker `MOCK_USER` herfra) for
 * konsistens mellom de to lokale modusene.
 */
export const MOCK_USER: UserData = {
	name: MOCK_USER_NAME,
	NAVident: MOCK_USER_NAVIDENT,
	groups: MOCK_USER_GROUPS,
};
