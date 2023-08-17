import { User } from 'src/domain/models/user';

export interface IUserRepository {
  save(user: User): Promise<User>;
  update(user: User, id: number): Promise<User>;
  delete(id: number);
  findOne(id: number): Promise<User>;
  listAll(): Promise<User[]>;
}
