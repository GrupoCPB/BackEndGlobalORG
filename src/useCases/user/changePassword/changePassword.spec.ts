import { IChangePasswordRepository } from '@/repositories/interfaces/user/IChangePasswordRepository';
import { TChangePasswordDTO } from './changePassword.dto';
import { ChangePasswordUseCase } from './changePassword.usecase';

class ChangePasswordRepositoryMock implements IChangePasswordRepository {
  idUser?: string;
  newPassword?:string;

  async updatePassword({ idUser, newPassword }: TChangePasswordDTO): Promise<void> {
    this.idUser = idUser;
    this.newPassword = newPassword;
  }
}

describe('Use Case - Change Password', () => {
  it('should change my password', async () => {
    const changePasswordRepo = new ChangePasswordRepositoryMock();
    const sut = new ChangePasswordUseCase(changePasswordRepo);
    await sut.execute({ idUser: 'any_id', newPassword: 'new_password' });

    expect(changePasswordRepo.idUser).toBe('any_id');
    expect(changePasswordRepo.newPassword).toBe('new_password');
  });
});
