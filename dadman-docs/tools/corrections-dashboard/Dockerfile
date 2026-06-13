FROM node:20-alpine

WORKDIR /app

COPY package.json .
RUN npm install --omit=dev

COPY server.js .
COPY public/ public/

# Data directory — mount a volume here for persistent state
RUN mkdir -p /app/data

EXPOSE 3001

CMD ["node", "server.js"]
