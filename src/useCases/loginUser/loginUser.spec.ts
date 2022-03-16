import { hashSync } from 'bcryptjs';
import { User } from '@/entities/Users';
import { IUsersRepository } from '@/repositories/IUsersRepository';
import { TLoginDTO } from './loginUser.dto';
import { LoginUserUseCase } from './loginUser.usecase';

class UsersRepositoryMock implements IUsersRepository {
  private users: User[] = [
    {
      name: 'Diener',
      email: 'test@hotmail.com',
      password: hashSync('1234', 8),
      role: 'admin',
    }
  ];
  user?: TLoginDTO = this.users[0];
  callCount = 0;
  async findByEmail(email: string): Promise<User> {
    this.callCount++;

    return this.users.find((u) => u.email === email);
  }
  async save(user: User): Promise<User> { return; }
  async updatePassword(id: string, newPassword: string): Promise<void> { return; }
}

const makeSut = async () => {
  const userRepo = new UsersRepositoryMock();

  const sut = new LoginUserUseCase(userRepo);

  return { sut, userRepo };
};

describe('Use Case - Login User', () => {
  it('should login user with correct params', async () => {
    const { sut, userRepo } = await makeSut();
    const res = await sut.execute({
      email: 'test@hotmail.com',
      password: '1234',
    });
    expect(userRepo.callCount).toBe(1);
    expect(res).toHaveProperty('token');
    expect(res).toHaveProperty('user', {
      ...userRepo.user,
      password: undefined,
    });
  });

  it('should login user with incorrect password', async () => {
    const { sut } = await makeSut();
    await expect(sut.execute({ email: 'test@hotmail.com', password: '12341' })).rejects.toThrowError('Error in authentication, password or email incorrect');
  });

  it('should login user with incorrect email', async () => {
    const { sut } = await makeSut();
    await expect(sut.execute({ email: 'test1@hotmail.com', password: '1234' })).rejects.toThrowError('Error in authentication, password or email incorrect');
  });

  //
});
