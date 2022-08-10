FROM node:18.7 as build

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:1.23-alpine

COPY --from=build /app/build/ /usr/share/nginx/html

COPY /nginx.conf /etc/nginx/templates/default.conf.template