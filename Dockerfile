FROM node:lts-alpine@sha256:2ffec31a58e85fbcd575c544a3584f6f4d128779e6b856153a04366b8dd01bb0
RUN apk add --no-cache bash
ENV NODE_ENV production

WORKDIR usr/src/app
COPY dist dist/
COPY server/package.json server/
COPY server/pnpm-lock.yaml server/
COPY server/build server/

WORKDIR server
RUN pnpm install

CMD ["node", "server.js"]
