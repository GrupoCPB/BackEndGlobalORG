import { User } from '../../entities/Users';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './createUser.dto';
import { CreateUserUseCase } from './createUser.usecase';

class UsersRepositoryMock implements IUsersRepository {
  private users: User[] = [];
  user?: ICreateUserRequestDTO;
  callCount = 0;
  async findByEmail(email: string): Promise<User> {
    this.callCount++;

    return this.users.find((u) => u.email === email);
  }
  async save(user: User): Promise<User> {
    this.user = user;
    this.users.push(user);

    return user;
  }
}

const makeSut = (): {
  sut: CreateUserUseCase;
  usersRepository: UsersRepositoryMock;
} => {
  const usersRepository = new UsersRepositoryMock();
  const sut = new CreateUserUseCase(usersRepository);

  return { sut, usersRepository };
};

const makeDataMock = (): ICreateUserRequestDTO => ({
  name: 'Diener',
  email: 'dienezim@hotmail.com',
  password: '1234',
  role: 'admin',
});

describe('Use Case - Create User', () => {
  it('should create a user', async () => {
    const { sut, usersRepository } = makeSut();
    const dataMock = makeDataMock();

    await sut.execute(dataMock);
    expect(usersRepository.callCount).toBe(1);
    expect(usersRepository.user).toMatchObject(usersRepository.user);
  });

  it('should create a duplicate user', async () => {
    const { sut, usersRepository } = makeSut();
    const dataMock = makeDataMock();

    await sut.execute(dataMock);
    await expect(sut.execute(dataMock)).rejects.toThrowError(
      'User already exists.'
    );
    expect(usersRepository.callCount).toBe(2);
  });
});
