FROM node:lts-alpine as build-stage
COPY . .
WORKDIR /src
RUN npm install
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /src/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
