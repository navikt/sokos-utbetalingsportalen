import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/pages/**/*.{astro,ts}", "src/middleware/index.ts"],
  project: ["**/*.{ts,tsx,astro,js,jsx,mjs}"],
  ignore: ["mock/**", "node_modules/**", "dist/**", ".astro/**"],
};

export default config;
