# ---------- Build Stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files first (better caching)
COPY . .

RUN npm install

# Build TypeScript
RUN npm run build --workspace=apps/api

EXPOSE 3000

CMD ["node", "apps/api/dist/server.js"]