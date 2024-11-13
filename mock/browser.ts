import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// Setup browser service worker using the given handlers
export const worker = setupWorker(...handlers);
