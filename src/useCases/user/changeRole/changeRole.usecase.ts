import { configRoles } from '@/config/roles';
import { IChangeRoleRepository } from '@/repositories/interfaces/user/IChangeRoleRepository';

type TRequestChangeRoleDTO= {
  userIdLogged: string;
  roleUserLogged: string;

  userId: string;
  newRole: string;
}
export class ChangeRoleUseCase {
  constructor(private readonly changeRoleRepo: IChangeRoleRepository) {}

  async execute(data:TRequestChangeRoleDTO): Promise<void> {
    const user = await this.changeRoleRepo.findByID(data.userId);

    if (user.id === data.userIdLogged) {
      throw new Error('It is not possible to change its own function.');
    }

    if (configRoles[user.role] < configRoles[data.roleUserLogged]) {
      throw new Error('Unable to change role of superior.');
    }

    if (configRoles[user.role] === configRoles[data.newRole]) {
      throw new Error('Role not changed.');
    }

    await this.changeRoleRepo.updateRole({ newRole: data.newRole, userId: data.userId });
  }
}
