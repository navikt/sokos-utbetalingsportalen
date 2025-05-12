import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import microfrontend from "./microfrontend";

const api = new Hono();

// Enable CORS for all routes
api.use(
  "/*",
  cors({
    origin: "http://localhost:4321",
    credentials: true,
  }),
);

api.get("/bundle.js", (c) => {
  return new Response(microfrontend, {
    headers: {
      "Content-Type": "text/javascript",
    },
  });
});

serve(api);
