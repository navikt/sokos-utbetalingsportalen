import importMapPlugin from "@eik/rollup-plugin";
import react from "@vitejs/plugin-react";
import { terser } from "rollup-plugin-terser";
import { viteMockServe } from "vite-plugin-mock";

const reactUrl = "https://www.nav.no/tms-min-side-assets/react/17/esm/index.js";
const reactDomUrl = "https://www.nav.no/tms-min-side-assets/react-dom/17/esm/index.js";

export default ({ command }) => ({
  plugins: [
    react(),
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve",
    }),
    {
      ...importMapPlugin({
        maps: [
          {
            imports: {
              react: reactUrl,
              "react-dom": reactDomUrl,
            },
          },
        ],
      }),
      enforce: "pre",
      apply: "build",
    },
    terser(),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
});
