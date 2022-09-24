FROM node:16-alpine@sha256:bf1e1c4761cd5e417b5ed60d5c599266270b728878089efcd1d63a8bd1dde446
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
