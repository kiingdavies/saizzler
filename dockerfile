FROM node:14-alpine
WORKDIR /saizzler
ENV PORT 80
COPY package.json /saizzler/package.json
RUN npm install
COPY . /saizzler
EXPOSE 8080
CMD ["node", "server.js"]