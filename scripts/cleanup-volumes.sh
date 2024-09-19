#!/bin/bash

# Stop and remove the containers
docker-compose down

# Clean up the named volumes
docker volume rm nestjs-starter-with-db-postgres-data