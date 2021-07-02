import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import UsersRepositories from '../repositories/UsersRepositories';

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  async execute({ name, email, password }: IUserRequest) {
    const userRepository = getCustomRepository(UsersRepositories);
    if (!email) {
      throw new Error('email incorrect');
    }
    const userAlreadyExists = await userRepository.findOne({
      email,
    });
    if (userAlreadyExists) {
      throw new Error('User already exists');
    }
    const passwordHash = await hash(password, 8);
    const users = await userRepository.create({
      name,
      email,
      password: passwordHash,
    });
    await userRepository.save(users);
    return users;
  }
}
