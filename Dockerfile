FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24-slim@sha256:d1f4d7df35b62dbdd424ea7e198b03f347e83434e39b01abb74c6161b6bffee9

WORKDIR /usr/src/app

COPY ./dist ./dist
COPY ./node_modules ./node_modules

ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["./dist/server/entry.mjs"]

EXPOSE $PORT
