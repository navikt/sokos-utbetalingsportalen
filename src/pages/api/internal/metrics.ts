import type { APIRoute } from "astro";
import { register } from "prom-client";

export const GET: APIRoute = async function get() {
  const headers = new Headers();
  headers.set("Content-Type", register.contentType);
  const metrics = await register.metrics();
  return new Response(metrics, { status: 200, headers });
};
