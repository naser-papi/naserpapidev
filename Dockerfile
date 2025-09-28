# Dockerfile
FROM node:20.11.1-alpine

# Tools for healthcheck (or pick the node-based check and remove this)
RUN apk add --no-cache curl

# Use npm ci for deterministic installs in CI contexts
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Copy rest and build
COPY . .
# (Build-time vars are better passed in the workflow with --build-arg)
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

ENV PORT=3000
EXPOSE 3000
CMD ["npm", "run", "start"]
