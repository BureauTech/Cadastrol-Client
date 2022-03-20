FROM node:lts-alpine as build-stage
WORKDIR /usr/src/cadastrol-client
COPY . .

WORKDIR /usr/src/cadastrol-client/src
RUN npm install
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /usr/src/cadastrol-client/src/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]