FROM node:alpine

CMD [ "mkdir", "/app/www/" ]

WORKDIR /app/www

COPY ./frontend/ .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]