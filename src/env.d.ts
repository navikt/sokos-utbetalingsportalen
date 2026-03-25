/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { UserData } from "@types/UserData";

declare global {
	namespace App {
		interface Locals {
			token: string;
			userData: UserData;
		}
	}
}
