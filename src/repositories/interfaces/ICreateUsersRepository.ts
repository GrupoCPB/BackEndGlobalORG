import { User } from '@/entities/Users';

export interface ICreateUserRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<User>;
}
