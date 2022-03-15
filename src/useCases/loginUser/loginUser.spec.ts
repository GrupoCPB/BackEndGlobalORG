import { hashSync } from 'bcryptjs';
import { User } from '@/entities/Users';
import { IUsersRepository } from '@/repositories/IUsersRepository';
import { TLoginDTO } from './loginUser.dto';
import { LoginUserUseCase } from './loginUser.usecase';

class UsersRepositoryMock implements IUsersRepository {
  private users: User[] = [];
  user?: TLoginDTO;
  callCount = 0;
  async findByEmail(email: string): Promise<User> {
    this.callCount++;

    return this.users.find((u) => u.email === email);
  }
  async save(user: User): Promise<User> {
    const password = hashSync(user.password, 8);
    this.user = { ...user, password };
    this.users.push({ ...user, password });

    return user;
  }
}

const makeSut = async () => {
  const userRepo = new UsersRepositoryMock();

  await userRepo.save({
    name: 'Diener',
    email: 'dienezim@hotmail.com',
    password: '1234',
    role: 'admin',
  });

  const sut = new LoginUserUseCase(userRepo);

  return { sut, userRepo };
};

describe('Use Case - Login User', () => {
  it('should login user with correct params', async () => {
    const { sut, userRepo } = await makeSut();
    const res = await sut.execute({
      email: 'dienezim@hotmail.com',
      password: '1234',
    });

    expect(res).toHaveProperty('token');
    expect(res).toHaveProperty('user', {
      ...userRepo.user,
      password: undefined,
    });
  });
});
