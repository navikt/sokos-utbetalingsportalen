# Byggefase
FROM node:lts-alpine@sha256:2ffec31a58e85fbcd575c544a3584f6f4d128779e6b856153a04366b8dd01bb0 as builder

WORKDIR /usr/src/app

COPY server/package*.json server/pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

# Produksjonsfase
FROM node:lts-alpine@sha256:2ffec31a58e85fbcd575c544a3584f6f4d128779e6b856153a04366b8dd01bb0

RUN apk add --no-cache bash

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/server/node_modules/ server/node_modules/
COPY dist/ dist/
COPY server/build/ server/

WORKDIR /usr/src/app/server

CMD ["node", "server.js"]

EXPOSE 8080
