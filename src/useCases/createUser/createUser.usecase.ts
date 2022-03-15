import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './createUser.dto';

export class CreateUserUseCase {
  constructor(private readonly usersRepo: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepo.findByEmail(data.email);

    if (userAlreadyExists) throw new Error('User already exists.');

    await this.usersRepo.save(data);
  }
}
