# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy all source code to the working directory
COPY . .

# Expose port 3000 (or the port your application listens to)
EXPOSE 3000

# Define the command to run your application
CMD ["node", "index.js"]
