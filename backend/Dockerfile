# ── Stage 1: Base Image ──────────────────────────────────────────
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# ── Stage 2: Install Dependencies ────────────────────────────────
# Copy package files first (better Docker layer caching)
COPY package*.json ./

# Install production dependencies only
RUN npm install --omit=dev

# ── Stage 3: Copy App Files ───────────────────────────────────────
COPY . .

# Create tmp folder for file uploads (express-fileupload)
RUN mkdir -p tmp

# ── Stage 4: Expose & Run ─────────────────────────────────────────
# Expose the port your app runs on
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]