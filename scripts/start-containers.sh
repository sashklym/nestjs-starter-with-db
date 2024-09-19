#!/bin/bash

# Create the named volumes
docker volume create nestjs-starter-with-db-postgres-data

# Start the containers
docker-compose up -d

# Check if the containers are running
if docker-compose ps | grep -q "Up"; then
  echo "Containers are up and running!"
else
  echo "Failed to start containers."
fi