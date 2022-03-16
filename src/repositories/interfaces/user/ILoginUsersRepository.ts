import { User } from '@/entities/Users';

export interface ILoginUserRepository {
  findByEmail(email: string): Promise<User>;
}
