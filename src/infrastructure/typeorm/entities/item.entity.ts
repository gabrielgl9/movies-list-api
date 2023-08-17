import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 200 })
  description: string;
}
