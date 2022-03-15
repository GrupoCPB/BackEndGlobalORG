import { compare, hashSync } from 'bcryptjs';
import JWT from 'jsonwebtoken';
import { User } from '@/entities/Users';
import { IUsersRepository } from '@/repositories/IUsersRepository';
import { configJWT } from '@/config/jwt';

type loginDTO = {
  email: string;
  password: string;
};

class UsersRepositoryMock implements IUsersRepository {
  private users: User[] = [];
  user?: loginDTO;
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

class LoginUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}
  async execute(data: loginDTO) {
    const user = await this.usersRepository.findByEmail(data.email);

    if (!user) {
      throw new Error('Error in authentication, password or email incorrect');
    }
    const passwordMatch = await compare(data.password, user.password);

    if (!passwordMatch) {
      throw new Error('Error in authentication, password or email incorrect');
    }

    const { secret, expiresIn } = configJWT;
    const token = JWT.sign({ id: user.id, role: user.role }, secret, {
      expiresIn,
    });

    const res = {
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };

    return res;
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
