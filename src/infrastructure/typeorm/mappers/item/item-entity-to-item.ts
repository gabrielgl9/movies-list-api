import { Item } from 'src/domain/models/item';
import { ItemEntity } from '../../entities/item.entity';

export function mapItemEntityToItem(itemEntity: ItemEntity): Item {
  const itemModel = new Item({
    id: itemEntity.id,
    name: itemEntity.name,
    description: itemEntity.description,
  });

  return itemModel;
}
