## Description

This project is a starter template for a NestJS application with a database setup inside Docker. It provides a basic structure to quickly get started with building scalable and maintainable server-side applications.

[Nest](https://github.com/nestjs/nest) Based application.


## Installation

```bash
$ npm install
```

## Run environment locally

Ensure you have Node.js (version 18 or higher) and Docker installed before proceeding with the following steps:

1. Copy the sample.env file and rename it to .env. Make any necessary changes to the environment variable values in the .env file.
    `cp sample.env .env`

2. Run the provided bash script to start the containers. Ensure that the script is executable by running the following command (`chmod +x start-containers.sh`):
    `./start-containers.sh`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
