/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
	interface Locals {
		token: string;
		userData: import("./types/UserData").UserData;
	}
}

declare global {
	interface Window {
		nais?: {
			app: {
				name: string;
				namespace: string;
				version: string;
			};
			telemetryCollectorURL: string;
		};
	}
}
