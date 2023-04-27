FROM node:lts-alpine@sha256:9a3cb11e78b5082ce7d22bb5113ed5bb7ac4c20195c05f3981e765e21e31c29c
RUN apk add --no-cache bash
ENV NODE_ENV production

WORKDIR usr/src/app
COPY dist dist/
COPY server/package*.json server/
COPY server/build server/

WORKDIR server
RUN npm ci

CMD ["node", "server.js"]

EXPOSE 8080
