import JWT from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { configJWT } from '@/config/jwt';
import { TLoginDTO } from './loginUser.dto';
import { ILoginUserRepository } from '@/repositories/interfaces/user/ILoginUsersRepository';

export class LoginUserUseCase {
  constructor(private readonly loginUsersRepository: ILoginUserRepository) {}
  async execute(data: TLoginDTO) {
    const user = await this.loginUsersRepository.findByEmail(data.email);

    if (!user) {
      throw new Error('Error in authentication, password or email incorrect');
    }
    const passwordMatch = await compare(data.password, user.password);

    if (!passwordMatch) {
      throw new Error('Error in authentication, password or email incorrect');
    }

    const { secret, expiresIn } = configJWT;
    const token = JWT.sign({ id: user.id, role: user.role }, secret, {
      expiresIn,
    });

    const res = {
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };

    return res;
  }
}
