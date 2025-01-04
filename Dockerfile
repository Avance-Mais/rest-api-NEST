FROM node:20.11.0

WORKDIR /app/

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY .eslintrc.js ./
COPY .env ./

RUN npm install

COPY ./prisma ./prisma
COPY ./src ./src

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "start"]