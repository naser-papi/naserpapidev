# --- Base with pnpm ---
FROM node:20-alpine AS base
ENV NODE_ENV=production
RUN corepack enable && corepack prepare pnpm@9.4.0 --activate
WORKDIR /app

# --- Dependencies ---
FROM base AS deps
# For some native deps
RUN apk add --no-cache libc6-compat
COPY package.json pnpm-lock.yaml* package-lock.json* ./
RUN if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; else npm ci; fi

# --- Build ---
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# If you need build-time public envs, add:
# ARG NEXT_PUBLIC_API_BASE
# ENV NEXT_PUBLIC_API_BASE=$NEXT_PUBLIC_API_BASE
RUN pnpm run build

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
