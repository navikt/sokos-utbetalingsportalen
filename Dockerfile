FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24-slim@sha256:a6ba96187db329d6c4d32c21fd6a89f217139f74712cc33eb85dd700d37d4ab4

WORKDIR /usr/src/app

COPY ./dist ./dist
COPY ./node_modules ./node_modules

ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["./dist/server/entry.mjs"]

EXPOSE $PORT
