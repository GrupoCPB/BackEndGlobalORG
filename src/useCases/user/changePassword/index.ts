import { ChangePasswordRepository } from '@/repositories/implementations/user/changePasswordRepository';
import { ChangePasswordController } from './changePassword.controller';
import { ChangePasswordUseCase } from './changePassword.usecase';

const changePasswordRepo = new ChangePasswordRepository();
const changePasswordUseCase = new ChangePasswordUseCase(changePasswordRepo);

const changePasswordController = new ChangePasswordController(changePasswordUseCase);

export { changePasswordController };
