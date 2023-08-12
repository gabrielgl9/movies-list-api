import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigService } from 'src/infrastructure/config/environment-config/environment-config.service';

export const createTypeOrmModuleOptions = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions =>
  ({
    // type: 'postgres',
    // host: config.getDatabaseHost(),
    // port: config.getDatabasePort(),
    // username: config.getDatabaseUser(),
    // password: config.getDatabasePassword(),
    // database: config.getDatabaseName(),
    // entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    // synchronize: false,
    // schema: process.env.DATABASE_SCHEMA,
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  } as TypeOrmModuleOptions);
