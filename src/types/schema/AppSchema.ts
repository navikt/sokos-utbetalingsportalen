import { z } from "zod";

export const AppSchema = z.object({
	app: z.string(),
	title: z.string(),
	description: z.string(),
	adGroupDevelopment: z.string(),
	adGroupProduction: z.string(),
	route: z.string(),
	naisAppName: z.string(),
});
