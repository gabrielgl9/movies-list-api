import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/domain/dtos/user/create-user-dto';
import { User } from 'src/domain/entities/user';
@Injectable()
export class CreateUserUseCase {
  private readonly userRepository;

  constructor() {
    this.userRepository;
  }

  action({ name, email, phone, password }: CreateUserDto): Promise<User> {
    const user = new User({
      name,
      email,
      phone,
      password,
    });

    return this.userRepository.create(user);
  }
}
