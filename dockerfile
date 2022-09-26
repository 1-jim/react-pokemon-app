#!/bin/bash
FROM arm64v8/node:latest
RUN apt-get update
RUN apt-get install nano
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]