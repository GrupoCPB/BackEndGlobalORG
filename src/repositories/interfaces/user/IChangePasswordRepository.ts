import { TChangePasswordDTO } from '@/useCases/user/changePassword/changePassword.dto';

export interface IChangePasswordRepository {
  updatePassword(data: TChangePasswordDTO): Promise<void>
}
