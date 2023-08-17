import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 200 })
  email: string;

  @Column({ length: 200 })
  phone: string;

  @Column({ length: 200 })
  password: string;
}
