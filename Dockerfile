# Stage 1: Build the application
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the TypeScript application
RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/package.json ./
COPY --from=build /app/package.lock.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Expose the port the app runs on
EXPOSE 8001

# Start the application
CMD ["node", "./dist/server.js"]
