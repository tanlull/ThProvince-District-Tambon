FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
# production
RUN npm install
COPY ./ ./
CMD ["node", "index.js"]