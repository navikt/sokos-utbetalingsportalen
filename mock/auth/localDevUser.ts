import type { UserData } from "../../src/types/UserData";
import {
	LOCAL_DEV_GROUPS,
	LOCAL_DEV_NAME,
	LOCAL_DEV_NAVIDENT,
} from "./localDevGroups";

/**
 * Syntetisk bruker brukt kun når `pnpm dev` kjøres uten
 * LOCAL_AUTH_PROXY_ENABLED (dvs. uten mock-oauth2-server/Wonderwall). Gir
 * rask lokal utvikling uten å måtte logge inn. Samme identitet som
 * mock-oauth2-server sin `mock/auth/oauth-config.json` (se `localDevGroups.ts`
 * for delt kilde) for konsistens mellom de to lokale modusene.
 */
export const LOCAL_DEV_USER: UserData = {
	name: LOCAL_DEV_NAME,
	NAVident: LOCAL_DEV_NAVIDENT,
	groups: LOCAL_DEV_GROUPS,
};
