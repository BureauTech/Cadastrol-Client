FROM node:lts-alpine as build-stage
WORKDIR /usr/src/btalert-client
COPY . .

WORKDIR /usr/src/btalert-client/src
RUN npm install
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /usr/src/btalert-client/src/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
