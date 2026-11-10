FROM node:20-alpine
WORKDIR /app
# node_modules is committed to the repo, so no npm install step is needed.
COPY . .
ENV PORT=3000
EXPOSE 3000
USER node
CMD ["node", "src/server.js"]
