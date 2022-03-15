import { UsersRepository } from '@/repositories/implementations/users/UsersRepository';
import { CreateUserController } from './createUser.controller';
import { CreateUserUseCase } from './createUser.usecase';

const createUsersRepo = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(createUsersRepo);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
