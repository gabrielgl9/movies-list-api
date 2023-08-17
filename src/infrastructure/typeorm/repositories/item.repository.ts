import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/domain/models/item';
import { IItemRepository } from 'src/infrastructure/repositories/item.interface';
import { Repository } from 'typeorm';
import { ItemEntity } from '../entities/item.entity';
import { mapItemEntityToItem } from '../mappers/item/item-entity-to-item';
import { mapItemToItemEntity } from '../mappers/item/item-to-item-entity';

export class ItemRepository implements IItemRepository {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<ItemEntity>,
  ) {}

  async save(item: Item): Promise<Item> {
    const itemEntity = mapItemToItemEntity(item);
    const itemSaved = await this.itemRepository.save(itemEntity);
    return mapItemEntityToItem(itemSaved);
  }

  async update(item: Item, id: number): Promise<Item> {
    const itemFound = await this.itemRepository.findOneBy({
      id,
    });

    if (!itemFound) {
      throw new Error('Usuário não encontrado');
    }

    itemFound.name = item.name;
    itemFound.description = item.description;

    const itemSaved = await this.itemRepository.save(itemFound);
    return mapItemEntityToItem(itemSaved);
  }

  async delete(id: number) {
    const itemFound = await this.itemRepository.findOneBy({
      id,
    });

    if (!itemFound) {
      throw new Error('Item não encontrado');
    }

    await this.itemRepository.delete(id);
  }

  async findOne(id: number): Promise<Item> {
    const itemEntity = await this.itemRepository.findOneBy({
      id,
    });

    return mapItemEntityToItem(itemEntity);
  }

  async listAll(): Promise<Item[]> {
    const itemsEntity = await this.itemRepository.find();

    const itemsModel = itemsEntity.map((itemEntity) =>
      mapItemEntityToItem(itemEntity),
    );

    return itemsModel;
  }
}
