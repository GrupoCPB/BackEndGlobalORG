import { IChangePasswordRepository } from '@/repositories/interfaces/user/IChangePasswordRepository';
import { TChangePasswordDTO } from './changePassword.dto';

export class ChangePasswordUseCase {
  constructor(private readonly changePasswordRepo: IChangePasswordRepository) {}
  async execute({ idUser, newPassword }: TChangePasswordDTO): Promise<void> {
    await this.changePasswordRepo.updatePassword({ idUser, newPassword });
  }
}
