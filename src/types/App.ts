import type { AppSchema } from "@schema/AppSchema";
import type { z } from "zod";

export type App = z.infer<typeof AppSchema>;
