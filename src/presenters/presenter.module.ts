import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { UseCaseModule } from 'src/domain/useCases/use-cases.module';

@Module({
  imports: [UseCaseModule],
  controllers: [ItemController],
  providers: [],
})
export class PresenterModule {}
