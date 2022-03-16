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

  async save(dataUser: User): Promise<User> {
    const orm = getCustomRepository(UserRepository);
    const passwordHsh = hashSync(dataUser.password, 8);

    const user = orm.create({ ...dataUser, password: passwordHsh });
    await orm.save(user);

    return { ...user, password: undefined };
  }

  async updatePassword(id: string, newPassword: string):Promise<void> {
    const orm = getCustomRepository(UserRepository);
    const passwordHash = hashSync(newPassword, 8);

    await orm.update({ id }, { password: passwordHash });
  }
}
