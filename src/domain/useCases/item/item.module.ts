import { Module } from '@nestjs/common';
import { CreateItemUseCase } from './create-item.service';
import { ListItemsUseCase } from './list-items.service';

@Module({
  providers: [CreateItemUseCase, ListItemsUseCase],
})
export class UseCaseModule {}
