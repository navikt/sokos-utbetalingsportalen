import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import microfrontend from "./microfrontend";
import { getMockBundle } from "./microfrontends/mockConfigs";

const api = new Hono();
const PORT = 3000;

// Enable CORS for all routes
api.use(
  "/*",
  cors({
    origin: "http://localhost:4321",
    credentials: true,
  }),
);

// Fjerne dette?
api.get("/bundle.js", (c) => {
  return new Response(microfrontend, {
    headers: {
      "Content-Type": "text/javascript",
    },
  });
});

api.get("/:microfrontend/bundle.js", (c) => {
  const microfrontendName = c.req.param("microfrontend");
  console.log(`📦 Serverer bundle for: ${microfrontendName}`);

  const mockBundle = getMockBundle(microfrontendName);

  return new Response(mockBundle, {
    headers: {
      "Content-Type": "text/javascript",
    },
  });
});

console.log(`🚀 Mock microfrontend server starting on port ${PORT}`);

serve({
  fetch: api.fetch,
  port: PORT,
});
