import { Item } from 'src/domain/models/item';
import { ItemEntity } from '../../entities/item.entity';

export function mapItemToItemEntity(item: Item): ItemEntity {
  const itemEntity = new ItemEntity();
  itemEntity.name = item.name;
  itemEntity.description = item.description;
  return itemEntity;
}
