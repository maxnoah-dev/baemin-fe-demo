FROM node:20

WORKDIR /app

COPY package.json .

RUN yarn config set network-timeout 3000000

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]