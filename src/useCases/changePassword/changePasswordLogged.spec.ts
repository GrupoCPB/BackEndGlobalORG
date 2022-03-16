type TChangePasswordLoggedDTO ={
  idUser: string;
  newPassword:string;
}

class ChangePasswordUseCase {
  constructor(private readonly changePasswordLoggedRepo: IChangePasswordLoggedRepository) {}
  async execute({ idUser, newPassword }: TChangePasswordLoggedDTO): Promise<void> {
    await this.changePasswordLoggedRepo.updatePassword({ idUser, newPassword });
  }
}

interface IChangePasswordLoggedRepository {
  updatePassword(data: TChangePasswordLoggedDTO): Promise<void>
}
class ChangePasswordLoggedRepositoryMock implements IChangePasswordLoggedRepository {
  idUser?: string;
  newPassword?:string;

  async updatePassword({ idUser, newPassword }: TChangePasswordLoggedDTO): Promise<void> {
    this.idUser = idUser;
    this.newPassword = newPassword;
  }
}

describe.only('Use Case - Change Password Owner', () => {
  it('should change my password', async () => {
    const changePasswordLoggedRepo = new ChangePasswordLoggedRepositoryMock();
    const sut = new ChangePasswordUseCase(changePasswordLoggedRepo);
    await sut.execute({ idUser: 'any_id', newPassword: 'new_password' });

    expect(changePasswordLoggedRepo.idUser).toBe('any_id');
    expect(changePasswordLoggedRepo.newPassword).toBe('new_password');
  });
});
