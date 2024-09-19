@echo off

REM Stop and remove the containers
docker-compose down

REM Clean up the named volumes
docker volume rm nestjs-starter-with-db-postgres-data