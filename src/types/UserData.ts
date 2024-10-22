import { z } from "zod";
import { UserDataSchema } from "./schema/UserDataSchema";

export type UserData = z.infer<typeof UserDataSchema>;
