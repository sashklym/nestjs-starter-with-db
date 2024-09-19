import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

const logger = new Logger('DatabaseModule');

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        logger.log('Starting with db connection:');
        logger.log(`MODE_RUN: ${configService.get('MODE_RUN')}`);
        let host = configService.get('DB_HOST');
        if (
          host === 'db' &&
          configService.get('MODE_RUN') !== 'docker-compose'
        ) {
          host = 'localhost';
        }
        try {
          return {
            type: 'postgres',
            host: host,
            port: parseInt(configService.get('DB_PORT'), 5432),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_DATABASE'),
            synchronize: false,
            schema: configService.get('DB_SCHEMA'),
            entities: [],
            uuidExtension: 'uuid-ossp',
          };
        } catch (error) {
          logger.error('Error connecting to the database:', error);
          throw error;
        }
      },
    }),
  ],
})
export class DatabaseModule {}
