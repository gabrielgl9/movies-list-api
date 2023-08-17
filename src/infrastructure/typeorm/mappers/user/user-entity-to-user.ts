import { User } from 'src/domain/models/user';
import { UserEntity } from '../../entities/user.entity';

export function mapUserEntityToUser(userEntity: UserEntity): User {
  const userModel = new User({
    id: userEntity.id,
    name: userEntity.name,
    email: userEntity.email,
    phone: userEntity.phone,
    password: userEntity.password,
  });

  return userModel;
}
