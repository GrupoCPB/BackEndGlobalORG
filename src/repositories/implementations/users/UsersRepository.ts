import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

import { hashSync } from 'bcryptjs';
import { User } from '@/entities/Users';
import { ICreateUserRepository } from '@/repositories/interfaces/ICreateUsersRepository';

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export class UsersRepository implements ICreateUserRepository {
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
}
