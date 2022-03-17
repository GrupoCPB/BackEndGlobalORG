import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { validate } from 'class-validator';
import { User } from '@/entities/Users';
import { IChangeRoleRepository } from '@/repositories/interfaces/user/IChangeRoleRepository';
import { TChangeRoleDTO } from '@/useCases/user/changeRole/changeRole.dto';

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export class ChangeRoleRepository implements IChangeRoleRepository {
  async findByID(id: string): Promise<User> {
    const orm = getCustomRepository(UserRepository);
    const user = await orm.findOne({ id });

    return user;
  }

  async updateRole({ newRole, userId }:TChangeRoleDTO): Promise<void> {
    const orm = getCustomRepository(UserRepository);

    const user = new User();
    user.role = newRole;
    const error = await validate(user, { skipMissingProperties: true });
    if (error.length) {
      throw error;
    }

    await orm.update({ id: userId }, { role: newRole });
  }
}
