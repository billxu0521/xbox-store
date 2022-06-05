FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

#EXPOSE 3031
#CMD npm config set cache-min 9999999 && npm install --only=production && npm start
#CMD npm install && npm run dev

ENTRYPOINT [ "npm","run","dev" ]
#CMD ["node", "/app/index.js"]