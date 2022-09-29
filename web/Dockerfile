FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @ionic/cli

COPY . .

EXPOSE 80
#EXPOSE 3031
#CMD npm config set cache-min 9999999 && npm install --only=production && npm start
#CMD npm install && npm run dev

ENTRYPOINT [ "ionic","serve","--port","80"]
#CMD ["node", "/app/index.js"]