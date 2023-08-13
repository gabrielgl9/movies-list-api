import { Module } from '@nestjs/common';
import { PresenterModule } from './presenters/presenter.module';
// import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
// import { TypeormModule } from './infrastructure/config/typeorm/typeorm.module';

@Module({
  imports: [PresenterModule],
})
export class AppModule {}
