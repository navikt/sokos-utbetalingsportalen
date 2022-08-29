FROM node:16-alpine
ENV NODE_ENV production

WORKDIR usr/src/app
COPY server server/
COPY dist dist/

WORKDIR server
RUN npm install

CMD ["node", "./server.js"]

ENV PORT=7100
EXPOSE $PORT
