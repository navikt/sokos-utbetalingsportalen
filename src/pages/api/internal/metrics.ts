import type { APIRoute } from "astro";
import { register } from "prom-client";

export const GET: APIRoute = async function get({ params, request }) {
  return new Response(await register.metrics(), {
    status: 200,
    headers: {
      "Content-Type": register.contentType,
    },
  });
};
