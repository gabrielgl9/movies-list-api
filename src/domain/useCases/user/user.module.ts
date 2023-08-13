import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './create-user.service';
import { ListUsersUseCase } from './list-users.service';

@Module({
  providers: [CreateUserUseCase, ListUsersUseCase],
})
export class UseCaseModule {}
