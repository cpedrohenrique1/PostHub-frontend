FROM node:24-alpine as builder
WORKDIR /builder
COPY . .

RUN npm i
RUN npx ng build

FROM node:24-alpine
WORKDIR /app
EXPOSE 8081
COPY --from=builder /builder/dist/PostHub-frontend/browser/ .
RUN npm i http-server

ENTRYPOINT ["npx", "http-server", "-a", "0.0.0.0", "-p", "8081"]