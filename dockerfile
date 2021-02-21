FROM node:12-alpine
WORKDIR /saizzler
COPY . .
RUN yarn install --production
CMD ["node", "server.js"]