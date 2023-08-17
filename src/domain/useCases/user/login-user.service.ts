import { Injectable } from '@nestjs/common';
import { LoginUserDto } from 'src/domain/dtos/user/login-user-dto';
import { User } from 'src/domain/models/user';

@Injectable()
export class LoginUserUseCase {
  private readonly userRepository;

  constructor() {
    this.userRepository;
  }

  async action({ email, password }: LoginUserDto): Promise<User> {
    const user = await this.userRepository.findBy({
      email,
    });

    if (!user) {
      throw new Error('Usuário não existe.');
    }

    return user;
  }
}
