FROM node:16.15.0

ARG API_PORT
ENV PORT=$API_PORT

WORKDIR /app
COPY package.json .

RUN npm install --silent

COPY . .

RUN npm run build-prod

EXPOSE $API_PORT

CMD [ "npm", "run", "start-prod" ]
