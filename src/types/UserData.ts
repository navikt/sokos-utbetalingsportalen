import type { UserDataSchema } from "@schema/UserDataSchema";
import type { z } from "zod";

export type UserData = z.infer<typeof UserDataSchema>;
