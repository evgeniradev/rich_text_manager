FROM node:8.16.0-alpine
RUN mkdir app
WORKDIR app
COPY . /app
RUN yarn install
RUN yarn build
CMD yarn start
