import { CreateUserRepository } from '../../repositories/implementations/createUserRepository';
import { CreateUserController } from './createUser.controller';
import { CreateUserUseCase } from './createUser.usecase';

const createUsersRepo = new CreateUserRepository();
const createUserUseCase = new CreateUserUseCase(createUsersRepo);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
