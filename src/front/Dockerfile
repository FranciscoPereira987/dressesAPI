FROM node:18 AS build

WORKDIR /app

COPY src/front/package.json ./
COPY src/front/package-lock.json ./
RUN npm install
COPY src/front/ ./
RUN npm run build


EXPOSE 4173
CMD [ "npm", "run", "preview", "--host"]