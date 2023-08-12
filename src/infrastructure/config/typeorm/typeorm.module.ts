import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { EnvironmentConfigService } from '../environment-config/environment-config.service';
// import { createTypeOrmModuleOptions } from 'src/shared/factories/create-typeorm-factory';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   imports: [],
    //   inject: [],
    //   // useFactory: [],
    // }),
  ],
})
export class TypeormModule {}
