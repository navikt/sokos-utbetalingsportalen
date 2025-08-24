import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import {
  getMockBundle,
  getLocalMicrofrontendUrl,
} from "./microfrontends/mockConfigs";

const api = new Hono();
const PORT = 3000;

api.use(
  "/*",
  cors({
    origin: [
      "http://localhost:4321",
      "http://localhost:4322",
      "http://localhost:4173",
    ],
    credentials: true,
  }),
);

api.get("/:microfrontend/bundle.js", async (c) => {
  const microfrontendName = c.req.param("microfrontend");
  console.log(`Serverer bundle for: ${microfrontendName}`);

  const localUrl = getLocalMicrofrontendUrl(microfrontendName);
  if (localUrl) {
    try {
      const response = await fetch(localUrl, { method: "HEAD" });
      if (response.ok || response.status === 405) {
        console.log(
          `Lokal microfrontend funnet på ${localUrl}, genererer iframe bundle`,
        );

        const localIframeBundle = `import React from 'react';

const LocalMicrofrontendIframe = () => {
  console.log('Lokal MF lastet via iframe:', '${localUrl}');

  return React.createElement('iframe', {
    src: '${localUrl}',
    style: { 
      width: '100%', 
      height: '100vh', 
      border: 'none',
      display: 'block'
    },
    title: '${microfrontendName} - Lokal utvikling',
  });
};

export default LocalMicrofrontendIframe;`;

        return new Response(localIframeBundle, {
          headers: {
            "Content-Type": "text/javascript",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
    } catch (error) {
      console.log(
        `Lokal microfrontend ikke tilgjengelig på ${localUrl}, bruker mock: ${error.message}`,
      );
    }
  }

  console.log(`Bruker mock bundle for ${microfrontendName}`);
  const mockBundle = getMockBundle(microfrontendName);

  return new Response(mockBundle, {
    headers: {
      "Content-Type": "text/javascript",
    },
  });
});

console.log(`Mock microfrontend server starter på port ${PORT}`);

serve({
  fetch: api.fetch,
  port: PORT,
});
