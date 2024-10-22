import { z } from "zod";

export const UserDataSchema = z.object({
  name: z.string(),
  navIdent: z.string(),
  adGroups: z.array(z.string()),
  error: z.string().optional(),
});
