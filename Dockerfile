FROM alpine:latest

RUN apk add --update nodejs npm
WORKDIR /app

#install dependecies
COPY package.json package.json



RUN  npm install
# RUN cd /app && npm install sequelize-cli

#copy files
COPY . .


ENTRYPOINT ["node", "index.js"]
