import { User } from '@/entities/Users';
import { IChangeRoleRepository } from '@/repositories/interfaces/user/IChangeRoleRepository';
import { TChangeRoleDTO } from './changeRole.dto';
import { ChangeRoleUseCase } from './changeRole.usecase';

class ChangeRoleRepositoryMock implements IChangeRoleRepository {
  userWithNewRole?: User;
  users: User[] = [
    {
      id: 'idOwner',
      name: 'Tester A',
      email: 'test.a@hotmail.com',
      password: '1234',
      role: 'owner',
    },
    {
      id: 'idUser',
      name: 'Tester B',
      email: 'test.b@hotmail.com',
      password: '1234',
      role: 'user',
    }
  ];
  async findByID(id: string): Promise<User> {
    const user = this.users.find((_user) => _user.id === id);

    return user;
  }
  async updateRole({ newRole, userId }: TChangeRoleDTO): Promise<void> {
    const user = await this.findByID(userId);
    this.userWithNewRole = { ...user, role: newRole };
  }
}

describe('Use Case - Change Role', () => {
  it('should change role other user', async () => {
    const changeRoleRepositoryMock = new ChangeRoleRepositoryMock();
    const sut = new ChangeRoleUseCase(changeRoleRepositoryMock);

    await sut.execute({
      userId: 'idUser',
      newRole: 'manager',
      userIdLogged: 'idOwner',
      roleUserLogged: 'owner'
    });

    expect(changeRoleRepositoryMock.userWithNewRole.role).toBe('manager');
  });

  it('should change my role ', async () => {
    const changeRoleRepositoryMock = new ChangeRoleRepositoryMock();
    const sut = new ChangeRoleUseCase(changeRoleRepositoryMock);

    await expect(
      sut.execute({
        userId: 'idOwner',
        newRole: 'user',
        userIdLogged: 'idOwner',
        roleUserLogged: 'owner'
      })
    ).rejects.toThrowError('It is not possible to change its own function.');
  });

  it('should change role of superior', async () => {
    const changeRoleRepositoryMock = new ChangeRoleRepositoryMock();
    const sut = new ChangeRoleUseCase(changeRoleRepositoryMock);

    await expect(
      sut.execute({
        userId: 'idOwner',
        newRole: 'admin',
        userIdLogged: 'idUser',
        roleUserLogged: 'user'
      })
    ).rejects.toThrowError('Unable to change role of superior.');
  });

  it('should change role to same', async () => {
    const changeRoleRepositoryMock = new ChangeRoleRepositoryMock();
    const sut = new ChangeRoleUseCase(changeRoleRepositoryMock);

    await expect(
      sut.execute({
        userId: 'idUser',
        newRole: 'user',
        userIdLogged: 'idOwner',
        roleUserLogged: 'owner'
      })
    ).rejects.toThrowError('Role not changed.');
  });

  //
});
