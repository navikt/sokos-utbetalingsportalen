import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { apps } from "../src/config/appConfig";
import { createLocalIframeBundle } from "./microfrontends/localIframeBundle";
import { createPlaceholderBundle } from "./microfrontends/placeholderBundle";

const api = new Hono();
const PORT = Number(process.env.MOCK_SERVER_PORT) || 3001;

const microfrontendConfigMap = Object.fromEntries(
	apps.map((mf) => [mf.naisAppName, mf]),
);

function parseLocalMicrofrontends(
	raw: string | undefined,
): Record<string, number> {
	if (!raw) {
		return {};
	}

	const ports: Record<string, number> = {};
	for (const entry of raw.split(",")) {
		const [naisAppName, portValue] = entry.split("=").map((s) => s.trim());
		const port = Number(portValue);

		if (!naisAppName || !Number.isInteger(port)) {
			console.warn(`Ugyldig LOCAL_MICROFRONTENDS-oppføring: "${entry}"`);
			continue;
		}
		if (!microfrontendConfigMap[naisAppName]) {
			console.warn(
				`Ukjent naisAppName i LOCAL_MICROFRONTENDS: "${naisAppName}" (finnes ikke i appConfig.ts)`,
			);
			continue;
		}

		ports[naisAppName] = port;
	}
	return ports;
}

// Format: LOCAL_MICROFRONTENDS="sokos-up-attestasjon=5173,sokos-up-oppdragsinfo=5174"
// Sett i .env.local, eller inline: LOCAL_MICROFRONTENDS="..." pnpm dev:mock
const localMicrofrontendPorts = parseLocalMicrofrontends(
	process.env.LOCAL_MICROFRONTENDS,
);

function getLocalMicrofrontendUrl(microfrontendName: string): string | null {
	const port = localMicrofrontendPorts[microfrontendName];
	const config = microfrontendConfigMap[microfrontendName];
	if (!port || !config) {
		return null;
	}

	return `http://localhost:${port}${config.route}`;
}

function getPlaceholderBundle(microfrontendName: string): string {
	const config = microfrontendConfigMap[microfrontendName];

	if (!config) {
		return createPlaceholderBundle({
			app: microfrontendName,
			title: "Ukjent Microfrontend",
			description: `Mock ikke funnet for "${microfrontendName}"`,
		});
	}

	return createPlaceholderBundle(config);
}

// ALLOWED_ORIGINS defineres i .env.template — legg til/fjern porter der,
// ikke her. Denne listen brukes av `pnpm dev` (som ikke laster .env.template);
// `pnpm dev:mock` bruker alltid verdien fra .env.template.
const defaultAllowedOrigins = [
	"http://localhost:4321",
	"http://localhost:4322",
	"http://localhost:3000",
];
function parseAllowedOrigins(raw: string | undefined): string[] {
	const origins = raw
		?.split(",")
		.map((origin) => origin.trim())
		.filter(Boolean);

	return origins && origins.length > 0 ? origins : defaultAllowedOrigins;
}

const allowedOrigins = parseAllowedOrigins(process.env.ALLOWED_ORIGINS);

api.use(
	"/*",
	cors({
		origin: allowedOrigins,
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
					`Lokal microfrontend tilgjengelig på ${localUrl}, genererer iframe bundle`,
				);

				const localIframeBundle = createLocalIframeBundle(
					microfrontendName,
					localUrl,
				);

				return new Response(localIframeBundle, {
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
				`Lokal microfrontend ikke tilgjengelig på ${localUrl}, bruker placeholder: ${errorMessage}`,
			);
		}
	}

	console.log(`Bruker placeholder-bundle for ${microfrontendName}`);
	const placeholderBundle = getPlaceholderBundle(microfrontendName);

	return new Response(placeholderBundle, {
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
