FROM node:lts-alpine AS build
COPY . /src/app
WORKDIR /src/app
RUN npm install
RUN npm run build

FROM nginx:latest
WORKDIR /var/www/html
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /src/app/build .
