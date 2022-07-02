FROM node:14.17-alpine as base

WORKDIR /usr/app

COPY ./ ./

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "dev" ]

FROM nginx:latest