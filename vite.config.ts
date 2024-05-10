import importMapPlugin from "@eik/rollup-plugin";
import terser from "@rollup/plugin-terser";
import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";

const reactUrl = "https://www.nav.no/tms-min-side-assets/react/18/esm/index.js";
const reactDomUrl =
  "https://www.nav.no/tms-min-side-assets/react-dom/18/esm/index.js";

export default () => ({
  plugins: [
    react(),
    viteMockServe({
      mockPath: "mock",
      enable: true,
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
    sourcemap: true,
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
});
