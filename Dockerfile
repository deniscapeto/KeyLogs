FROM node:latest
MAINTAINER Denis Capeto
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start
EXPOSE 3000