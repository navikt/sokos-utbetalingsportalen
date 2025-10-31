import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: [
    "src/pages/**/*.{astro,ts,tsx}",
    "!src/pages/**/_*",
    "src/middleware/index.ts",
  ],
  ignore: [
    "mock/**",
    "node_modules/**",
    "dist/**",
    ".astro/**",
    "playwright-report/**",
  ],
};

export default config;
