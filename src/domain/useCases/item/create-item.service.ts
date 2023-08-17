import { Injectable } from '@nestjs/common';
import { CreateItemDto } from 'src/domain/dtos/item/create-item-dto';
import { Item } from 'src/domain/models/item';

@Injectable()
export class CreateItemUseCase {
  private readonly itemRepository;

  constructor() {
    this.itemRepository;
  }

  action(createItemDto: CreateItemDto): Promise<Item> {
    const item = new Item({
      name: createItemDto.name,
      description: createItemDto.description,
    });

    return this.itemRepository.create(item);
  }
}
