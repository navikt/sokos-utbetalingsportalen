FROM node:lts-alpine@sha256:09faa7dabeae557cb6baff17be5b216fc4e3c9608aa04fe71695aad3d229a9c7
RUN apk add --no-cache bash
ENV NODE_ENV production

WORKDIR usr/src/app
COPY server server/
COPY dist dist/

WORKDIR server
RUN npm install

CMD ["node", "./server.js"]

ENV PORT=7100
EXPOSE $PORT
