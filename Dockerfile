FROM gcr.io/distroless/nodejs20-debian12@sha256:04350092341fdc31bd1c9c7cac4f50f9194652f3afd8d4a442428b102c9d66c2
RUN npm i -g pnpm

ENV NODE_ENV production

WORKDIR /usr/src/app
COPY dist dist/
COPY server/package.json server/
COPY server/pnpm-lock.yaml server/
COPY server/build server/

WORKDIR /usr/src/app/server
RUN pnpm install

CMD ["node", "server.js"]