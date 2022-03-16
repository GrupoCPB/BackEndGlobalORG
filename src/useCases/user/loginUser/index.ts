import { LoginRepository } from '@/repositories/implementations/user/loginUsersRepository';
import { LoginUserController } from './loginUser.controller';
import { LoginUserUseCase } from './loginUser.usecase';

const usersRepo = new LoginRepository();
const loginUserUseCase = new LoginUserUseCase(usersRepo);

const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserController };
