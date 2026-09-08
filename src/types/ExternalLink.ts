import type { ExternalLinkSchema } from "@schema/ExternalLinkSchema";
import type { z } from "zod";

export type ExternalLink = z.infer<typeof ExternalLinkSchema>;
