FROM node:lts-alpine@sha256:fdbd2737cb94e25cae3db9fc5d7dc073c9675dad34239bfb3948c499a6908c19
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
