FROM node:8-alpine

RUN mkdir /build
WORKDIR /build

COPY . /build
RUN npm install

EXPOSE 80
CMD [ "npm", "run", "deploy" ]