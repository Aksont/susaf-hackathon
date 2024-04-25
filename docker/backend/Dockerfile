FROM  node:14

CMD ["mkdir", "app/web/"]

WORKDIR /app/web/
COPY ./backend/ .

RUN npm install --production

EXPOSE 8000

CMD [ "npm", "start" ]