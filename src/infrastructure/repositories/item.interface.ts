import { Item } from 'src/domain/models/item';

export interface IItemRepository {
  save(item: Item): Promise<Item>;
  update(item: Item, id: number): Promise<Item>;
  delete(id: number);
  findOne(id: number): Promise<Item>;
  listAll(): Promise<Item[]>;
}
