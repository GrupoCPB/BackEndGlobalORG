import { ChangeRoleRepository } from '@/repositories/implementations/user/IChangeRoleRepository';
import { ChangeRoleController } from './changeRole.controller';
import { ChangeRoleUseCase } from './changeRole.usecase';

const changeRoleRepository = new ChangeRoleRepository();

const changeRoleUseCase = new ChangeRoleUseCase(changeRoleRepository);

const changeRoleController = new ChangeRoleController(changeRoleUseCase);

export { changeRoleController };
