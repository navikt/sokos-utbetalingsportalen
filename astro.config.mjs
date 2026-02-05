import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
	integrations: [
		react(),
		{
			name: "importmap-externals",
			hooks: {
				"astro:build:setup": ({ vite, target }) => {
					if (target === "client") {
						vite.build.rollupOptions.external = [
							"react",
							"react/jsx-runtime",
							"react-dom",
							"react-dom/client",
							"scheduler",
						];
					}
				},
			},
		},
	],
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	vite: {
		publicDir: "./public",
	},
});
