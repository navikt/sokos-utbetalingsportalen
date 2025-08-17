import { defineConfig, passthroughImageService } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  /*build: {
    assetsPrefix: "https://cdn.nav.no/min-side/utbetalingsportalen", // TODO: oppdatere med vår cdn bucket
  },*/
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    react(),
    {
      name: "importmap-externals",
      hooks: {
        "astro:build:setup": ({ vite, target }) => {
          if (target === "client") {
            vite.build.rollupOptions["external"] = ["react", "react-dom"];
          }
        },
      },
    },
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
