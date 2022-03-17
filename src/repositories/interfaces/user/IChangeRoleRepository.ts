import { User } from '@/entities/Users';
import { TChangeRoleDTO } from '@/useCases/user/changeRole/changeRole.dto';

export interface IChangeRoleRepository{
  findByID(id: string): Promise<User>
  updateRole(data : TChangeRoleDTO): Promise<void>
}
