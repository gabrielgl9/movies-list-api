import { User } from 'src/domain/models/user';
import { UserEntity } from '../../entities/user.entity';

export function mapUserToUserEntity(user: User): UserEntity {
  const userEntity = new UserEntity();
  userEntity.name = user.name;
  userEntity.email = user.email;
  userEntity.phone = user.phone;
  userEntity.password = user.password;

  return userEntity;
}
