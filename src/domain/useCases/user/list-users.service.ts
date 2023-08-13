import { Item } from 'src/domain/entities/item';

export class ListUsersUseCase {
  private readonly itemRepository;

  constructor() {
    this.itemRepository;
  }

  action(): Promise<Item[]> {
    return this.itemRepository.listAll();
  }
}
