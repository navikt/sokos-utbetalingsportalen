FROM gcr.io/distroless/nodejs20-debian12@sha256:04350092341fdc31bd1c9c7cac4f50f9194652f3afd8d4a442428b102c9d66c2

WORKDIR /usr/src/app
COPY dist dist/
COPY server/build server/
COPY server/node_modules server/node_modules/

WORKDIR /usr/src/app/server

CMD ["server.js"]