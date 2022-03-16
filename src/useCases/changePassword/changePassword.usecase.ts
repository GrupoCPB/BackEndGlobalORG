import { IChangePasswordRepository } from '@/repositories/IChangePasswordRepository';
import { TChangePasswordDTO } from './changePassword.dto';

export class ChangePasswordUseCase {
  constructor(private readonly changePasswordLoggedRepo: IChangePasswordRepository) {}
  async execute({ idUser, newPassword }: TChangePasswordDTO): Promise<void> {
    await this.changePasswordLoggedRepo.updatePassword({ idUser, newPassword });
  }
}
