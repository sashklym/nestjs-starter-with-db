@echo off

REM Create the named volumes
docker volume create nestjs-starter-with-db-postgres-data

REM Start the containers
docker-compose up -d

REM Check if the containers are running
docker-compose ps | findstr "Up" >nul
if %errorlevel% equ 0 (
  echo Containers are up and running!
) else (
  echo Failed to start containers.
)