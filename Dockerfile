# --- Base ---
FROM node:20-alpine AS base
ENV NODE_ENV=production
WORKDIR /app

# --- Dependencies ---
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package*.json ./
RUN npm ci

# --- Build ---
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_API_SERVER
ENV NEXT_PUBLIC_API_SERVER=$NEXT_PUBLIC_API_SERVER

# If you need these at runtime only, remove from build stage and ensure compose provides them
ARG API_SERVER
ARG SHOW_CONSTRUCTION
ARG DATABASE_URL
ENV API_SERVER=$API_SERVER
ENV SHOW_CONSTRUCTION=$SHOW_CONSTRUCTION
ENV DATABASE_URL=$DATABASE_URL

RUN npm run build

# --- Runtime (standalone) ---
FROM node:20-alpine AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0
WORKDIR /app

# Copy Next standalone output
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
