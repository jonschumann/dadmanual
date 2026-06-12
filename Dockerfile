# ── Stage 1: Build ─────────────────────────────────────────────────────────────
FROM node:20 AS builder
WORKDIR /app

# Skip Chromium download — puppeteer is only used for PDF generation (separate
# workflow), not for the Docusaurus static build.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Install dependencies (respects package-lock.json for reproducible builds)
COPY package.json package-lock.json ./
RUN npm ci

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
