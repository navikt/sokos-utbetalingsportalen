import type { APIContext } from "astro";

export function isInternal(context: APIContext): boolean {
	return context.request.url.includes("/internal");
}
