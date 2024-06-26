# FROM node:18.3.0-alpine3.16
FROM node:18-alpine AS base

WORKDIR /usr/src/alere/frontend

USER root

COPY ./ .

RUN chmod 770 ./commands.sh

RUN npm config set fetch-retry-mintimeout 20000
RUN npm config set fetch-retry-maxtimeout 180000

RUN npm install
RUN npm run build

CMD ./commands.sh