import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/models/user';
import { IUserRepository } from 'src/infrastructure/repositories/user.interface';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { mapUserEntityToUser } from '../mappers/user/user-entity-to-user';
import { mapUserToUserEntity } from '../mappers/user/user-to-user-entity';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async save(user: User): Promise<User> {
    const userEntity = mapUserToUserEntity(user);
    const userSaved = await this.userRepository.save(userEntity);
    return mapUserEntityToUser(userSaved);
  }

  async update(user: User, id: number): Promise<User> {
    const userFound = await this.userRepository.findOneBy({
      id,
    });

    if (!userFound) {
      throw new Error('Usuário não encontrado');
    }

    userFound.name = user.name;
    userFound.email = user.email;
    userFound.phone = user.phone;
    userFound.password = user.password;

    const userSaved = await this.userRepository.save(userFound);
    return mapUserEntityToUser(userSaved);
  }

  async delete(id: number) {
    const userFound = await this.userRepository.findOneBy({
      id,
    });

    if (!userFound) {
      throw new Error('Usuário não encontrado');
    }

    await this.userRepository.delete(id);
  }

  async findOne(id: number): Promise<User> {
    const userEntity = await this.userRepository.findOneBy({
      id,
    });

    return mapUserEntityToUser(userEntity);
  }

  async listAll(): Promise<User[]> {
    const usersEntity = await this.userRepository.find();

    const usersModel = usersEntity.map((userEntity) =>
      mapUserEntityToUser(userEntity),
    );

    return usersModel;
  }
}
