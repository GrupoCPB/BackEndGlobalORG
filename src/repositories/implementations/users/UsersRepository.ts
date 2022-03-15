import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

import { hashSync } from 'bcryptjs';
import { IUsersRepository } from '@/repositories/IUsersRepository';
import { User } from '@/entities/Users';

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const orm = getCustomRepository(UserRepository);
    const user = await orm.findOne({ email });

    return user;
  }

  async save(_user: User): Promise<User> {
    const orm = getCustomRepository(UserRepository);
    const password = hashSync(_user.password, 8);

    const user = orm.create({ ..._user, password });
    await orm.save(user);

    return user;
  }
}
