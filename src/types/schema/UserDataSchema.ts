import { z } from "zod";

export const UserDataSchema = z.object({
	name: z.string(),
	NAVident: z.string(),
	groups: z.array(z.uuidv4({ message: "Invalid UUID" })),
});
