import { User } from '@/entities/Users';
import { ICreateUserRepository } from '@/repositories/interfaces/user/ICreateUsersRepository';
import { ICreateUserRequestDTO } from './createUser.dto';

export class CreateUserUseCase {
  constructor(private readonly createUsersRepo: ICreateUserRepository) {}

  async execute(data: ICreateUserRequestDTO): Promise<User> {
    const userAlreadyExists = await this.createUsersRepo.findByEmail(data.email);
    if (userAlreadyExists) throw new Error('User already exists.');

    const user = await this.createUsersRepo.save(data);

    return user;
  }
}
