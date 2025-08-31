#!/bin/bash

# Install root dependencies
npm install

# Change to client directory
cd client

# Install client dependencies
npm install

# Build the project
npm run build

# The output will be in client/dist
echo "Build completed successfully!"
