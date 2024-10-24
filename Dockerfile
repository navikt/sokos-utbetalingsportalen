FROM gcr.io/distroless/nodejs20-debian12@sha256:f912a7599e5338df6527a669def29bddc9469fdac9ab22c4cc9282c1b64c868b

WORKDIR /usr/src/app
COPY dist dist/
COPY server/build server/
COPY server/node_modules server/node_modules/

WORKDIR /usr/src/app/server

CMD ["server.js"]