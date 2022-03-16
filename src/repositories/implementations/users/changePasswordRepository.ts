import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { hashSync } from 'bcryptjs';
import { User } from '@/entities/Users';
import { IChangePasswordRepository } from '@/repositories/interfaces/IChangePasswordRepository';
import { TChangePasswordDTO } from '@/useCases/changePassword/changePassword.dto';

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export class ChangePasswordRepository implements IChangePasswordRepository {
  async updatePassword({ idUser, newPassword }: TChangePasswordDTO): Promise<void> {
    const orm = getCustomRepository(UserRepository);
    const passwordHash = hashSync(newPassword, 8);

    await orm.update({ id: idUser }, { password: passwordHash });
  }
}
