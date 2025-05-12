import type { APIContext } from "astro";

export const isInternal = (context: APIContext) =>
  context.request.url.includes("/internal");
