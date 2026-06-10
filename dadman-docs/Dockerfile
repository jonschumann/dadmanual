# ── Stage 1: Build ─────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (respects package-lock.json for reproducible builds)
COPY package.json package-lock.json ./
RUN npm ci --prefer-offline

# Copy source and build Docusaurus static site
COPY . .
RUN npm run build

# ── Stage 2: Serve ─────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runtime

# Remove default Nginx placeholder content
RUN rm -rf /usr/share/nginx/html/*

# Copy built static site from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Inject custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
