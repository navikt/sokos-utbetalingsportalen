import { z } from "zod";

export const ExternalLinkSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	url: z.url(),
});
