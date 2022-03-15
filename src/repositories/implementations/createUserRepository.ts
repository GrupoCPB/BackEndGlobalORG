import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { User } from '../../entities/Users';
import { IUsersRepository } from '../IUsersRepository';

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export class CreateUserRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const orm = getCustomRepository(UserRepository);
    const user = await orm.findOne({ email });

    return user;
  }

  async save(_user: User): Promise<void> {
    const orm = getCustomRepository(UserRepository);
    const user = orm.create(_user);
    await orm.save(user);
  }
}
