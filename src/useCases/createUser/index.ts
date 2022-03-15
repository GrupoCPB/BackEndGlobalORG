import { UsersRepository } from '@/repositories/implementations/users/UsersRepository';
import { CreateUserController } from './createUser.controller';
import { CreateUserUseCase } from './createUser.usecase';

const usersRepo = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepo);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
