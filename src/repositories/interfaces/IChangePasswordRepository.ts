import { TChangePasswordDTO } from '@/useCases/changePassword/changePassword.dto';

export interface IChangePasswordRepository {
  updatePassword(data: TChangePasswordDTO): Promise<void>
}
