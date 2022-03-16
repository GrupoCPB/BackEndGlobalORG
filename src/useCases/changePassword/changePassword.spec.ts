import { IChangePasswordRepository } from '@/repositories/IChangePasswordRepository';
import { TChangePasswordDTO } from './changePassword.dto';
import { ChangePasswordUseCase } from './changePassword.usecase';

class ChangePasswordLoggedRepositoryMock implements IChangePasswordRepository {
  idUser?: string;
  newPassword?:string;

  async updatePassword({ idUser, newPassword }: TChangePasswordDTO): Promise<void> {
    this.idUser = idUser;
    this.newPassword = newPassword;
  }
}

describe.only('Use Case - Change Password', () => {
  it('should change my password', async () => {
    const changePasswordLoggedRepo = new ChangePasswordLoggedRepositoryMock();
    const sut = new ChangePasswordUseCase(changePasswordLoggedRepo);
    await sut.execute({ idUser: 'any_id', newPassword: 'new_password' });

    expect(changePasswordLoggedRepo.idUser).toBe('any_id');
    expect(changePasswordLoggedRepo.newPassword).toBe('new_password');
  });
});
