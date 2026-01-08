import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { apps } from "../src/config/appConfig";
import { createLocalApp } from "./microfrontends/local";
import { createMockApp } from "./microfrontends/mock";

const api = new Hono();
const PORT = 3000;

const localMicrofrontends: Record<
	string,
	{ port: number; route?: string; enabled: boolean }
> = {
	"sokos-up-attestasjon": {
		port: 5173,
		route: "/attestasjon",
		enabled: true,
	},
	"sokos-up-oppdragsinfo": {
		port: 5174,
		route: "/oppdragsinfo",
		enabled: true,
	},
};

const microfrontendConfigMap = Object.fromEntries(
	apps.map((mf) => [mf.naisAppName, mf]),
);

function getLocalMicrofrontendUrl(microfrontendName: string): string | null {
	const localConfig = localMicrofrontends[microfrontendName];
	if (!localConfig || !localConfig.enabled) {
		return null;
	}

	const route =
		localConfig.route || `/${microfrontendName.replace("sokos-up-", "")}`;
	return `http://localhost:${localConfig.port}${route}`;
}

function getMockBundle(microfrontendName: string): string {
	const config = microfrontendConfigMap[microfrontendName];

	if (!config) {
		return createMockApp({
			app: microfrontendName,
			title: "Ukjent Microfrontend",
			description: `Mock ikke funnet for "${microfrontendName}"`,
			adGroupDevelopment: "",
			adGroupProduction: "",
			route: "",
			naisAppName: microfrontendName,
		});
	}

	return createMockApp(config);
}

api.use(
	"/*",
	cors({
		origin: ["http://localhost:4321", "http://localhost:4322"],
		credentials: true,
	}),
);

api.get("/:microfrontend/bundle.js", async (c) => {
	const microfrontendName = c.req.param("microfrontend");
	console.log(`Serverer bundle for: ${microfrontendName}`);

	const localUrl = getLocalMicrofrontendUrl(microfrontendName);
	if (localUrl) {
		try {
			const response = await fetch(localUrl, { method: "HEAD" });
			if (response.ok || response.status === 405) {
				console.log(
					`Lokal microfrontend funnet på ${localUrl}, genererer iframe bundle`,
				);

				const localBundle = createLocalApp(microfrontendName, localUrl);

				return new Response(localBundle, {
					headers: {
						"Content-Type": "text/javascript",
						"Access-Control-Allow-Origin": "*",
					},
				});
			}
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : String(error);
			console.log(
				`Lokal microfrontend ikke tilgjengelig på ${localUrl}, bruker mock: ${errorMessage}`,
			);
		}
	}

	console.log(`Bruker mock bundle for ${microfrontendName}`);
	const mockBundle = getMockBundle(microfrontendName);

	return new Response(mockBundle, {
		headers: {
			"Content-Type": "text/javascript",
		},
	});
});

console.log(`Mock microfrontend server starter på port ${PORT}`);

serve({
	fetch: api.fetch,
	port: PORT,
});
