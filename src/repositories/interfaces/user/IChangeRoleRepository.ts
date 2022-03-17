import { User } from '@/entities/Users';

export interface changeRoleRepository{
  findByID(id: string): Promise<User>
  updateRole(user: User, newRole: string): Promise<void>
}
