
# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:18

# Create and change to the app directory.
# mkdir & cd
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# in folder /usr/src/app
# package.json
# package-lock.json

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# /usr/src/app
# index.js
# config/

RUN chmod 755 .docker/commands/test.sh

# Run the web service on container startup.
CMD [".docker/commands/test.sh"]