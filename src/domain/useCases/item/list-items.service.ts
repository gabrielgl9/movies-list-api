import { Injectable } from '@nestjs/common';
import { Item } from 'src/domain/models/item';

@Injectable()
export class ListItemsUseCase {
  private readonly itemRepository;

  constructor() {
    this.itemRepository;
  }

  action(): Promise<Item[]> {
    return this.itemRepository.listAll();
  }
}
