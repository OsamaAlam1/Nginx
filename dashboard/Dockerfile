# ── Stage 1: Build Stage ─────────────────────────────────────────
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first (better Docker layer caching)
COPY package*.json ./

# Install all dependencies (including devDependencies needed for build)
RUN npm install

# Copy all project files
COPY . .

# Build the Vite React app (outputs to /app/dist)
RUN npm run build

# ── Stage 2: Serve with Nginx ─────────────────────────────────────
FROM nginx:alpine

# Copy built files from Stage 1 into Nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx config to handle React Router (SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]