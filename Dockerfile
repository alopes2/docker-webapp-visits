# Use base image
FROM node:alpine

# Set working directory
WORKDIR /app

COPY package.json .

# Install dependencies
RUN npm install

COPY . .

CMD ["npm", "start"]