import { UsersRepository } from '@/repositories/implementations/users/UsersRepository';
import { LoginUserController } from './loginUser.controller';
import { LoginUserUseCase } from './loginUser.usecase';

const usersRepo = new UsersRepository();
const loginUserUseCase = new LoginUserUseCase(usersRepo);

const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserController };
