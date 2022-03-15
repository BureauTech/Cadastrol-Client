FROM node:lts-alpine

COPY . .

WORKDIR /src

RUN npm install

RUN npm run build

EXPOSE 3001
CMD [ "npm", "run", "dev" ]
