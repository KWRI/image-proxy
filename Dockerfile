FROM node:alpine

COPY . .

RUN yarn install --production=false --network-concurrency 1

EXPOSE 5000

CMD ["yarn", "start"]