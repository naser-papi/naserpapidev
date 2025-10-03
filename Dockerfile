# --- Base ---
FROM node:20-alpine AS base
ENV NODE_ENV=production
WORKDIR /app

# --- Dependencies ---
FROM base AS deps
# Add build toolchain (for node-gyp) and libc6-compat
RUN apk add --no-cache libc6-compat python3 make g++
COPY package*.json ./
RUN npm ci

# --- Build ---
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Optional: ignore ESLint during production builds if lint rules are failing the build
# (you can keep linting in a separate CI job)
# ENV NEXT_DISABLE_ESLINT=1
# or set in next.config.js: eslint: { ignoreDuringBuilds: true }

# If your app validates envs at build (e.g., Zod), you can bypass with:
# ENV SKIP_ENV_VALIDATION=true
RUN npm run build

# --- Runtime (standalone) ---
FROM node:20-alpine AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0
WORKDIR /app

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]