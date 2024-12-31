# Use Node.js base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Expose port 3000 and start the application
EXPOSE 3000
CMD ["yarn", "start"]
