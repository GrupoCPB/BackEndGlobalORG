import { configRoles } from '@/config/roles';
import { User } from '@/entities/Users';

type TRequestChangeRoleDTO = {
  userIdLogged: string;
  roleUserLogged: string;
  userId: string;
  newRole: string;
}

interface changeRoleRepository{
  findByID(id: string): Promise<User>
  updateRole(user: User, newRole: string): Promise<void>
}

class ChangeRoleRepositoryMock implements changeRoleRepository {
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
  async updateRole(user:User, newRole: string): Promise<void> {
    this.userWithNewRole = { ...user, role: newRole };
  }
}

class ChangeRoleUseCase {
  constructor(private readonly changeRoleRepo: changeRoleRepository) {}

  async execute(data: TRequestChangeRoleDTO): Promise<void> {
    const user = await this.changeRoleRepo.findByID(data.userId);

    if (user.id === data.userIdLogged) {
      throw new Error('It is not possible to change its own function.');
    }

    if (configRoles[user.role] < configRoles[data.roleUserLogged]) {
      throw new Error('Unable to change role of superior.');
    }

    if (configRoles[user.role] === configRoles[data.newRole]) {
      throw new Error('Role not changed.');
    }

    await this.changeRoleRepo.updateRole(user, data.newRole);
  }
}

describe('Use Case - Change Role', () => {
  it('should change role other user', async () => {
    const changeRoleRepositoryMock = new ChangeRoleRepositoryMock();
    const changeRoleUseCase = new ChangeRoleUseCase(changeRoleRepositoryMock);

    await changeRoleUseCase.execute({
      userId: 'idUser',
      newRole: 'manager',
      userIdLogged: 'idOwner',
      roleUserLogged: 'owner'
    });

    expect(changeRoleRepositoryMock.userWithNewRole.role).toBe('manager');
  });

  it('should change my role ', async () => {
    const changeRoleRepositoryMock = new ChangeRoleRepositoryMock();
    const changeRoleUseCase = new ChangeRoleUseCase(changeRoleRepositoryMock);

    await expect(
      changeRoleUseCase.execute({
        userId: 'idOwner',
        newRole: 'user',
        userIdLogged: 'idOwner',
        roleUserLogged: 'owner'
      })
    ).rejects.toThrowError('It is not possible to change its own function.');
  });

  it('should change role of superior', async () => {
    const changeRoleRepositoryMock = new ChangeRoleRepositoryMock();
    const changeRoleUseCase = new ChangeRoleUseCase(changeRoleRepositoryMock);

    await expect(
      changeRoleUseCase.execute({
        userId: 'idOwner',
        newRole: 'admin',
        userIdLogged: 'idUser',
        roleUserLogged: 'user'
      })
    ).rejects.toThrowError('Unable to change role of superior.');
  });

  it('should change role to same', async () => {
    const changeRoleRepositoryMock = new ChangeRoleRepositoryMock();
    const changeRoleUseCase = new ChangeRoleUseCase(changeRoleRepositoryMock);

    await expect(
      changeRoleUseCase.execute({
        userId: 'idUser',
        newRole: 'user',
        userIdLogged: 'idOwner',
        roleUserLogged: 'owner'
      })
    ).rejects.toThrowError('Role not changed.');
  });

  //
});
